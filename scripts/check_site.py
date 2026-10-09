#!/usr/bin/env python3
"""Validate static local links, anchors, asset paths, and basic HTML structure.

Uses only Python's standard library. Does not verify external URLs or values in
assets/js/media.js; test optional media and document links after configuring them.
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

ROOT = Path(__file__).resolve().parents[1]

class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.references: list[str] = []
        self.errors: list[str] = []
        self.h1_count = 0
        self.lang = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = dict(attrs)
        if tag == "html":
            self.lang = data.get("lang") or ""
        if tag == "h1":
            self.h1_count += 1
        if data.get("id"):
            self.ids.append(str(data["id"]))
        for attr in ("src", "href", "poster"):
            if attr in data:
                value = data[attr] or ""
                if not value.strip():
                    self.errors.append(f"Empty {attr} on <{tag}>")
                else:
                    self.references.append(value)
        if tag == "img" and "alt" not in data:
            self.errors.append("Image missing alt attribute")
        if tag == "a" and data.get("target") == "_blank":
            rel = (data.get("rel") or "").split()
            if "noopener" not in rel:
                self.errors.append("External-tab link is missing rel=noopener")


def main() -> int:
    pages = {}
    failures = []
    for path in ROOT.rglob("*.html"):
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8"))
        pages[path.resolve()] = parser
        prefix = str(path.relative_to(ROOT))
        failures.extend(f"{prefix}: {msg}" for msg in parser.errors)
        if parser.lang != "en":
            failures.append(f"{prefix}: expected lang=en")
        if parser.h1_count != 1:
            failures.append(f"{prefix}: expected exactly one h1")
        if len(parser.ids) != len(set(parser.ids)):
            failures.append(f"{prefix}: duplicate id")
    if not pages:
        failures.append("No HTML files found")
    for path, parser in pages.items():
        for url in parser.references:
            parsed = urlsplit(url)
            if parsed.scheme or parsed.netloc:
                continue
            target = (path.parent / unquote(parsed.path)).resolve() if parsed.path else path
            if target.is_dir():
                target = target / "index.html"
            if not target.exists():
                failures.append(f"{path.name}: missing local target {url}")
            elif parsed.fragment and target in pages:
                if unquote(parsed.fragment) not in pages[target].ids:
                    failures.append(f"{path.name}: missing anchor {url}")
    if not (ROOT / ".nojekyll").is_file():
        failures.append("Missing .nojekyll in repository root")
    if failures:
        print("FAILED\n" + "\n".join(f"- {msg}" for msg in failures))
        return 1
    print(f"PASS: {len(pages)} HTML page(s); static local assets, links, anchors, and basic structure checked.")
    print("External URLs and media.js optional paths require browser testing.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
