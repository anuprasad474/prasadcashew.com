# Product & Brand Images — how to swap in your own photos

The site currently uses high-quality stock photography (loaded from Unsplash) so the
layout looks finished. To use **your own product photos**, drop files with these exact
names into this `images/` folder and update the one referenced line per product in
`index.html` (each product tile has an HTML comment marking where).

## Recommended files (square or 4:5, ≥ 700px wide, JPG)

| File name | Used for | Currently shows |
|---|---|---|
| `cashew.avif` | Cashew Kernels tile | ✓ client cashew photo (bowl of kernels) |
| `coffee.jpg` | Robusta Coffee tile | Roasted robusta beans |
| `pepper.webp` | Black Pepper tile | ✓ client photo (peppercorns + spoon) |
| `coconut.avif` | Desiccated Coconut tile | ✓ client photo (coconut + desiccated flakes) |
| `hero.jpg` | Hero background (optional) | Coffee/agri texture |
| `logo.png` | Brand logo (already in project root) | ALLNUTTS badge |

## To switch a tile from stock → your photo
In `index.html`, find the comment, e.g.:
`<!-- PRODUCT IMAGE: Desiccated Coconut. Replace with your own photo at images/coconut.jpg -->`
Then change that tile's `background-image:url('…unsplash…')` to
`background-image:url('images/coconut.jpg')`.

## Photo tips for a premium look
- Shoot on a clean, neutral or dark surface; soft daylight; no harsh flash.
- Fill the frame with product; leave a little breathing room (text overlays the corners).
- Keep all four product photos in a consistent style (same light, same crop ratio).
