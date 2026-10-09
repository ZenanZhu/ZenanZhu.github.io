# Zenan Zhu — simple academic website

This revision replaces the large opening slogans and dark research panel with a short biography, a portrait, and simple profile links. Research projects use compact image-and-text rows. The website remains plain HTML, CSS, and JavaScript.

## Updating the previous starter

**Already edited your website?** Back it up, then replace only:

- `index.html`
- `assets/css/style.css`

Keep your existing `assets/js/media.js`, research figures, videos, and documents. All media/document keys are unchanged. The existing `assets/js/main.js` also works unchanged. This replacement will replace any custom text you added to `index.html`, so merge your biography/project edits first rather than overwriting them blindly.

You may also replace `AGENTS.md` to give Codex the new simple-design instructions. `CONTENT_NOTES.md` contains the source record.

**Starting fresh?** Use all files in this folder. Upload its contents, not this enclosing folder or ZIP, to your repository root.

## Add your portrait

Put your chosen photo at `assets/images/portrait.jpg`. In `assets/js/media.js`, change only the `src` field of the existing `portrait` object:

```js
portrait: {
  type: "image",
  src: "assets/images/portrait.jpg",
  alt: "Portrait of Zenan Zhu",
  caption: ""
},
```

The desktop portrait is a 224 × 224 pixel circular frame and scales down on small screens. A square image of at least 600 × 600 pixels is a practical choice. Your actual image is not altered; the CSS controls the visible crop. Adjust `object-position` in `.portrait-slot > img` to change the crop. To use a rounded rectangle instead, change `.portrait-slot` from `border-radius: 50%` to `border-radius: 6px`.

Until you supply a photo, the page shows a neutral placeholder. It does not use a stock photo, a generated person, or a portrait from either reference website.

## What appears in the opening

Name, three short paragraphs, profile/contact links, and a one-line job-search statement. Edit the text in the first `<section class="hero ...">` in `index.html`. The contact links use your résumé's email and existing profile URLs. CV/résumé and GitHub links appear only after their actual path/URL is set in `assets/js/media.js`.

The remaining setup instructions from the original starter follow. They describe the same file structure and publishing method.

---

# Zenan Zhu — research portfolio starter

An English-only, responsive personal website for robotics research and engineering applications. Built with plain HTML, CSS, and a little JavaScript. There is **no package installation, build command, database, or API key**.

Research copy is already drafted. Figures, a portrait, videos, code links, and PDF downloads are deliberately left for you to add. No source research documents, personal phone number, or messaging ID are included in this package.

## 1. Preview it on your computer

Extract the ZIP and double-click `index.html`. The page works without a server or internet connection; external publication links require internet access.

For development, an optional local server is:

```sh
python -m http.server 8000
```

Run that command **inside this folder**, then open `http://localhost:8000` in your browser. On Windows, use `py -m http.server 8000` when the `python` command is unavailable. Stop the server with Ctrl+C.

## 2. Publish with the GitHub Pages quickstart

Official guide: <https://docs.github.com/en/pages/quickstart>

1. Sign in to GitHub and create a repository named **`YOUR-USERNAME.github.io`**. Replace `YOUR-USERNAME` with your actual GitHub account username, not your display name. A user website has the form `https://YOUR-USERNAME.github.io/`.
2. Choose **Public** for the straightforward GitHub Free setup. Add a README when creating the repository so that `main` exists.
3. Open the repository's **Code** tab. Choose **Add file → Upload files**. Upload the **contents of this extracted folder**, preserving the `assets/` and `scripts/` folders. Upload the files, not the ZIP. `index.html` must appear directly at the repository root, beside `README.md` — not inside another `zenan-website-starter/` folder. Replace the initial README with this one when prompted.
4. Commit the upload to **`main`**. Check that the empty `.nojekyll` file was included. When necessary, create a file named `.nojekyll` in the repository root using **Add file → Create new file**; a comment or blank line is fine if the editor requires content.
5. Go to **Settings → Pages → Build and deployment**. Choose **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**, then **Save**.
6. Check the **Actions** tab for the Pages deployment. In **Settings → Pages**, use **Visit site** after deployment succeeds. GitHub notes that publishing changes can take up to ten minutes.

**Two differences from the quickstart:** This starter uses `index.html`, not `README.md`, for the actual homepage. Skip the guide's `_config.yml` title/description customization and any Jekyll theme setup. Change the `<title>`, description, and visible text in `index.html` instead. The included `.nojekyll` file tells Pages to serve the static site without a Jekyll build.

GitHub still uses its own Pages deployment workflow behind the scenes. You do not need to write or configure a custom Actions workflow for this starter.

Do not put private files in a public repository. A public repository also exposes files that are not linked from the homepage.

### Already have `YOUR-USERNAME.github.io`?

Do not overwrite an existing site blindly. Review the existing repository first. This starter also uses relative paths and can live in a separate project repository, with a project-site URL such as `https://YOUR-USERNAME.github.io/portfolio/`. Enable Pages from `main` and `/(root)` there too.

## 3. The files you will edit

```text
index.html                  Your name, biography, projects, publications, and contact
assets/css/style.css        Colors, fonts, spacing, and responsive layout
assets/js/media.js          Figure/video paths, résumé/PDF paths, and code links
assets/js/main.js           Media display and optional link behavior
assets/images/              Upload images here
assets/videos/              Upload short demonstration videos here
assets/documents/           Upload approved résumés, posters, and manuscripts here
AGENTS.md                   Instructions for Codex or another coding assistant
CONTENT_NOTES.md             Sources, claim boundaries, and content to confirm
scripts/check_site.py        Small local link and asset check
.nojekyll                   Keep this file at the repository root
```

No GitHub username has been guessed. The optional GitHub link stays hidden until you enter it in `assets/js/media.js`. Résumé, local PDF, and code buttons also stay hidden until their paths are entered. Figures have clear placeholders rather than broken image links.

All project descriptions are ordinary HTML so that the main page remains readable even when JavaScript is disabled. Project details use native expandable sections.

## 4. Add your figures and video later

Upload files first, then edit the matching entry in **`assets/js/media.js`**. Paths in that file are **relative to `index.html`**, not to the JavaScript file. Filenames are case-sensitive on the hosted site.

Suggested filenames:

| Media key | Suggested file | What belongs there |
|---|---|---|
| `portrait` | `assets/images/portrait.jpg` | Your chosen professional photo |
| `inekf` | `assets/images/inekf.jpg` | IMU frames, experiment, or estimator results |
| `maml` | `assets/images/maml.png` | Architecture or adaptation curves |
| `joint-ekf` | `assets/images/joint-ekf.png` | Sensor setup and joint-angle results |
| `reduced-model` | `assets/images/reduced-model.png` | Model diagram or CoM prediction |
| `rl` | `assets/videos/replay.mp4` | Your MyoAssist / Dephy simulation replay |
| `exo-control` | `assets/images/exo-control.png` | Control pipeline or sensor-to-torque demonstration |

For example, change the existing `maml` entry to:

```js
maml: {
  type: "image",
  src: "assets/images/maml.png",
  alt: "MAML architecture for gait phase and terrain estimation",
  caption: "Shared feature extraction and three prediction heads. Zhu et al., RA-L 2026."
},
```

For the replay, change the existing `rl` entry to:

```js
rl: {
  type: "video",
  src: "assets/videos/replay.mp4",
  poster: "assets/images/rl-preview.jpg", // use "" when no preview image exists
  alt: "Simulated human locomotion with Dephy ExoBoots",
  caption: "RL policy replay using MyoAssist. Simulation demonstration; ongoing work."
},
```

The video has playback controls, does not autoplay, and uses `preload="metadata"`. The image/video frames preserve the full media instead of cropping plots. Use accurate alternative text and captions. When a video contains narration, add captions or a transcript; describe important visual results in the adjacent text too.

**Video format:** An MP4 file encoded with H.264 is a practical browser-compatible choice. An MP4 container alone does not guarantee a supported codec. Check playback after uploading.

**Media size:** GitHub's browser upload limit is 25 MiB per file; regular Git uploads are blocked above 100 MiB. Keep short web clips small. For larger videos, host them on a suitable video service and have Codex add an embed, rather than putting a large research archive in the site repository. A YouTube page URL will not work as a native `<video>` source. Do not use Git LFS as a GitHub Pages media-hosting workaround: GitHub Pages does not support Git LFS.

## 5. Add your résumé and paper/poster links

Upload your reviewed English résumé as `assets/documents/Zenan_Zhu_Resume.pdf`. Then set:

```js
resume: "assets/documents/Zenan_Zhu_Resume.pdf",
```

inside the existing `documents` object in `media.js`. Its buttons will appear automatically. Use the other document keys for approved PDFs. The journal DOI links already work without local PDFs.

For code, add each actual repository URL under `code`. For your profile, set:

```js
social: {
  github: "https://github.com/YOUR-USERNAME"
}
```

Replace placeholders with actual URLs; do not publish `YOUR-USERNAME` literally.

Only upload paper versions and research media you are authorized to share. Prefer linking to a publisher record or public preprint until the correct shareable manuscript version is confirmed. Review participant-media permissions before making research images public. The Chinese résumé and full prelim deck are not included or linked.

## 6. Use Codex for focused edits (optional)

Codex is an editor/coding assistant, not the hosting service. GitHub Pages hosts the website. You can first publish without Codex and use it later.

Two practical workflows:

- **In your editor:** Open the cloned repository in VS Code and use the official Codex IDE extension. Ask it to inspect `AGENTS.md` and make one focused change. Review the diff and preview before committing and pushing.
- **In the cloud:** Create/select a Codex Cloud environment, connect GitHub, and select this website repository. Ask for a change, review the files and checks, then commit or open a pull request. Publishing a *Codex environment* does not publish your website: the change must reach the configured GitHub Pages branch.

Starter task:

```text
Read AGENTS.md, README.md, and CONTENT_NOTES.md. This repository is my English
robotics research portfolio, deployed with GitHub Pages from main and /(root).
Keep it as plain HTML, CSS, and JavaScript with no build step.

Keep the simple academic layout and compact image-and-text project rows.
Inspect the current site and propose only small, focused changes. Preserve my research claims, publication details, and project status.
Do not invent metrics, publications, code links, or hardware-validation claims.
Do not upload the source reports, private data, or credentials.

Make the approved edits on a separate branch. Test desktop and mobile layouts,
check media fallbacks and local links, and show me the diff and test results.
Do not merge, push to main, or change deployment settings without my approval.
```

When adding media, a more focused task is:

```text
I uploaded assets/videos/replay.mp4 and assets/images/rl-preview.jpg.
Read AGENTS.md. Connect those files to the RL project using assets/js/media.js.
Keep native playback controls, no autoplay, an accessible description, and the
MyoAssist credit. Keep the project labeled as ongoing simulation work.
Verify playback and layout, then show the changes for review.
```

## 7. Before sharing with recruiters

Review the English descriptions and your contribution to each collaborative project. Add your preferred headshot, current English résumé, and the actual GitHub URL. Replace or remove any unused media placeholders. Keep journal/conference papers separate from posters and ongoing work. Check contact links, filenames, mobile layout, and all published download links. No graduation date or detailed RL algorithm/reward configuration has been assumed.

Run the basic local check:

```sh
python scripts/check_site.py
```

With Node.js installed, optional JavaScript syntax checks are:

```sh
node --check assets/js/media.js
node --check assets/js/main.js
```

The Python check validates static HTML links and assets; it does not verify external websites or optional filenames entered in `media.js`. Test those manually in your browser after editing them.

## Official documentation

Checked when this starter was prepared in October 2026:

- GitHub Pages quickstart: <https://docs.github.com/en/pages/quickstart>
- Publishing source: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>
- Static sites and `.nojekyll`: <https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site>
- Adding files: <https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository>
- GitHub file limits: <https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github>
- Git LFS and Pages: <https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage>
- Codex Cloud: <https://developers.openai.com/codex/cloud>
- Codex IDE extension: <https://developers.openai.com/codex/ide>
- Codex repository instructions: <https://developers.openai.com/codex/agent-configuration/agents-md>

These Codex documentation URLs may redirect to the current official documentation site.
