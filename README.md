# Sense of Space Workshop Website (CVPR 2026)

This folder contains a two-page static website:

- `index.html` — single-page website (Abstract, Speakers, Schedule, Organizers, Sponsors, Contact)
- `cfp.html` — Call for Papers page (tracks + timeline)

## Customize quickly

- Background image: replace `assets/hero.svg` with your own image, or edit `style.css` (`.hero-bg` background-image).
- Speaker headshots: replace each speaker `<img class="avatar" ...>` `src` with a real headshot URL/path.
- Organizer headshots: same for organizer cards.
- Sponsor logos: replace `assets/sponsor1.svg` etc.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000
