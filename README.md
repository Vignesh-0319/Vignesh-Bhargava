# Vignesh Bhargava — Midnight Studio

A complete, static developer portfolio with a cinematic garage introduction, five project case studies, eleven credential entries, an about page, and contact links.

## Run locally

```sh
python3 -m http.server 4317 --directory dist
```

Open http://localhost:4317. No build step or backend is required. All visual assets, typefaces, PDFs, and the Three.js module are hosted locally.

## Content and interactions

- Edit project and certificate records in `dist/app.js`.
- Page markup lives in `dist/index.html`; layout and responsive styles in `dist/styles.css`.
- The intro in `dist/scene.js` plays the supplied drift footage and composites a smoke transition into the portrait.
- Intro plays once per session and has replay and skip controls. Reduced-motion users receive the static experience.
- Audio is opt-in. No microphone, tracking, analytics, or external scripts are used.
- Filters, credential search, issuer selection, empty states, native accessible dialogs, direct case-study URLs, and email copying work client-side.
- Oracle certificates include local files. Other entries link to the owner's LinkedIn credentials; missing certificate evidence is not fabricated.
- Project illustrations are labeled interface recreations. Prototype limitations are disclosed in each case study.

## Deployment

The `.openai/hosting.json` manifest points to `dist`. For GitHub Pages, publish the contents of `dist` at the repository root. Relative links support subdirectory hosting.

## Third-party assets

Three.js 0.170.0 is distributed under the MIT license. Barlow Condensed, Geist, and IBM Plex Mono are open-source Google Fonts. Garage and vehicle artwork was generated for this design. Profile photo, résumé, and certificates belong to the portfolio owner.

## Video intro update
The intro now uses the user-supplied Need for Speed gameplay excerpt. The selected source range is 11.7–16.7 seconds. It is encoded as a 1280×670 H.264 MP4 at 30 fps with a restrained contrast/sharpness treatment, added animated tyre smoke, and faded audio. The site adds a second smoke veil to conceal the transition to the monochrome portrait and accessible HTML name. The enhanced film is stored at `dist/assets/drift-enhanced.mp4`.

Playback is muted by default, plays once per session, and supports replay/skip and reduced-motion fallback. The original upload is preserved outside this repository. Video export was decoded and its frames inspected; browser QA was unavailable for this update.
