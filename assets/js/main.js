/* Progressive enhancement only. The research text is already in index.html. */
"use strict";
(() => {
  const settings = window.PORTFOLIO || {};
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  function safePath(value) {
    if (typeof value !== "string" || !value.trim()) return "";
    const text = value.trim();
    // Accept website URLs or local relative paths, not script/data URLs.
    if (/^https?:\/\//i.test(text)) return text;
    if (/^[a-z][a-z0-9+.-]*:/i.test(text) || text.startsWith("//") || text.includes("\\")) return "";
    return text;
  }

  document.querySelectorAll("[data-media]").forEach(slot => {
    const item = (settings.media || {})[slot.dataset.media];
    if (!item) return;
    const src = safePath(item.src);
    if (!src) return;
    const original = Array.from(slot.childNodes).map(node => node.cloneNode(true));
    let captionNode;
    function restore() {
      slot.replaceChildren(...original.map(node => node.cloneNode(true)));
      if (captionNode) captionNode.remove();
    }
    const type = item.type === "video" ? "video" : "image";
    const media = document.createElement(type === "video" ? "video" : "img");
    if (type === "video") {
      media.controls = true;
      media.loop = true;
      media.muted = true;
      media.defaultMuted = true;
      media.autoplay = !reducedMotion.matches;
      media.preload = "metadata";
      media.playsInline = true;
      media.setAttribute("aria-label", item.alt || "Research video");
      const poster = safePath(item.poster);
      if (poster) media.poster = poster;
      media.addEventListener("error", () => {
        restore();
        const fallback = document.createElement("a");
        fallback.href = src;
        fallback.className = "video-fallback";
        fallback.textContent = "Video unavailable here — open the video file";
        slot.appendChild(fallback);
      }, { once: true });
    } else {
      media.alt = item.alt || "Research figure";
      media.loading = slot.dataset.media === "portrait" ? "eager" : "lazy";
      media.decoding = "async";
      media.addEventListener("error", restore, { once: true });
    }
    slot.replaceChildren(media);
    if (typeof item.caption === "string" && item.caption.trim()) {
      captionNode = document.createElement("p");
      captionNode.className = "media-caption";
      captionNode.textContent = item.caption;
      slot.after(captionNode);
    }
    media.src = src;
    if (type === "video" && media.autoplay) {
      // Keep manual controls available if the browser blocks autoplay.
      media.play().catch(() => {});
    }
  });

  reducedMotion.addEventListener("change", event => {
    document.querySelectorAll("[data-media] > video").forEach(video => {
      video.autoplay = !event.matches;
      if (event.matches) video.pause();
    });
  });

  [["document", "documents"], ["code", "code"], ["social", "social"]].forEach(([attr, group]) => {
    document.querySelectorAll(`[data-${attr}]`).forEach(link => {
      const url = safePath((settings[group] || {})[link.dataset[attr]]);
      if (!url) return;
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.hidden = false;
    });
  });

  // Opening a project permalink also expands its technical summary.
  function expandLinkedProject() {
    const id = window.location.hash.slice(1);
    const article = document.getElementById(id);
    if (!article || !article.classList.contains("project-card")) return;
    const details = article.querySelector("details");
    if (details) details.open = true;
  }
  window.addEventListener("hashchange", expandLinkedProject);
  expandLinkedProject();
})();
