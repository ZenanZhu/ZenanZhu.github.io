# Instructions for coding assistants

## Purpose
Maintain Zenan Zhu's English-only robotics research and job-search portfolio. The site emphasizes state estimation, robot learning, dynamics, and wearable robotics. Interest in legged/humanoid robotics is not a claim of completed humanoid hardware work.

## Architecture
- Plain static `index.html`, `assets/css/style.css`, and `assets/js/*.js`.
- No framework, package manager, build step, backend, database, or API key.
- Deploy with GitHub Pages, `main` branch, `/(root)`; keep `.nojekyll`.
- Keep paths relative so the site works under both user and project Pages URLs.
- Main content stays in HTML, not rendered exclusively by JavaScript.
- Optional media and links are configured in `assets/js/media.js`.
- Keep empty media placeholders functional and unavailable download links hidden.

## Content integrity
- Read CONTENT_NOTES.md before changing scientific content.
- Never invent metrics, results, awards, graduation dates, titles, coauthor roles, URLs, repositories, or deployments.
- Distinguish journal/conference publications, poster presentations, and ongoing research.
- Credit collaborators. MAML and ACC author lists have equal-contribution notes.
- InEKF: group-affine process model, non-invariant measurement update; no claim of globally guaranteed full-state convergence. Absolute position and yaw are unobservable in the reported setting.
- Joint-angle EKF: raw-fabric-sensor validation reports left-knee estimation, not validated four-joint estimation.
- MAML: final paper Table I uses 3.5 s labeled calibration data per locomotion/speed condition and four fine-tuning steps. Reported means: 85% gait accuracy, 100% locomotion accuracy, 2.67 degrees incline RMSE. This is not zero-shot or general deployment performance. Do not replace it with the older prelim setting of 7.5 s.
- RL: ongoing MyoAssist-based simulation work, not an original simulation framework or evidence of hardware transfer/benefit. Ask for action space, rewards, algorithm, custom modifications, and evaluation evidence before adding such claims.
- Reduced-order modeling and the full personalization controller are preliminary/ongoing, not fully validated outcomes.
- Use direct English. Prefer "developed", "derived", "estimated", and "evaluated" over promotional wording.

## Assets, privacy, and access
- Do not publish entire source reports, experiment archives, private contact fields, access tokens, or participant media without approval.
- Do not copy publisher-formatted papers into the repository automatically. Preserve DOI/preprint links or use an authorized manuscript version.
- Keep website/public contact email as provided unless the owner changes it.
- Do not fabricate a portrait. Use only a supplied and approved photo.
- Do not add analytics, external fonts, tracking scripts, or contact-form services without approval.

## Visual design preference
- Use a simple academic webpage, not a product landing page.
- The opening contains a short first-person introduction and a real portrait, with plain professional/contact links.
- Keep white backgrounds, normal-sized headings, subtle separators, and compact project rows.
- Do not bring back large research slogans, numbered focus panels, dark call-to-action bands, decorative gradients, heavy shadows, or pill-shaped buttons unless the owner explicitly requests them.
- On desktop, biography is on the left and portrait on the right; on mobile, the portrait stacks above the biography.
- Preserve the `project-visual` wrapper so optional captions stay with the image/video.

## User experience
- Preserve readable text and layout at 375, 768, and 1440 CSS pixels.
- Keep semantic headings, keyboard focus styles, a skip link, image alternative text, and reduced-motion support.
- Do not autoplay research videos. Keep playback controls and useful fallbacks.
- Use original research media; never generate fake research plots or results.

## Checks and version control
- Run `python scripts/check_site.py` after editing HTML or static paths.
- When Node.js is available, run `node --check assets/js/media.js` and `node --check assets/js/main.js`.
- Preview desktop/mobile layouts and exercise media/PDF links after configuration changes.
- Report checks actually run and any failures. Do not claim testing that did not occur.
- Work on a branch and show the diff. Do not merge to main, publish, or change Pages settings without the owner's approval.
