# Summer 2026 Trip Site - Development Guide

This is a **personal consumption, local-only site** for planning our family's Summer 2026 Europe trip. It is not deployed publicly.

## Tech Stack

- **Next.js 16** with App Router and Turbopack
- **Tailwind CSS** for styling
- **TypeScript**

## Running the Site

```bash
cd site
npm run dev
```

The site runs at `http://localhost:3000`

## Finding and Adding Images

Since this is a personal site that won't be deployed publicly, images can be sourced from anywhere.

### Recommended Approach

1. **Use Google Image Search** in a browser to find appropriate images for each location
2. **Save images locally** to `/public/images/[location]/` (e.g., `/public/images/barcelona/`, `/public/images/dublin/`)
3. **Reference them** in the code as `/images/[location]/filename.jpg`

### Image Naming Conventions

Use descriptive, lowercase, hyphenated names:
- `dingle-harbor.jpg`
- `park-guell.jpg`
- `trinity-college.jpg`

### Image Sizes

- Hero images: ~1200-1600px wide
- Card/thumbnail images: ~600-800px wide
- Keep file sizes reasonable (under 500KB ideally)

### What to Search For

When searching for images, be specific:
- "Dingle Ireland harbor colorful boats"
- "Park Guell Barcelona Gaudi mosaic dragon"
- "Trinity College Dublin Long Room library"
- "Phoenix Park Dublin deer"

### Wikimedia Commons

Wikimedia Commons has many free images, but direct downloads via curl often fail. Instead:
1. Browse to the image page in a browser
2. Right-click and save the full-resolution image
3. Place it in the appropriate `/public/images/` subdirectory

### Unsplash

**DO NOT use Unsplash images.** They look generic and stock-photo-like. Instead, download real images from:
- Official attraction websites
- Wikimedia Commons
- Tourism board sites (discoverireland.ie, ireland.com, etc.)

Real photos of the actual attractions are much better than generic stock photos.

## Project Structure

```
site/
├── public/
│   └── images/
│       ├── barcelona/
│       ├── dublin/
│       ├── dingle/
│       └── connemara/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Overview/home
│   │   ├── dublin/page.tsx
│   │   ├── barcelona/page.tsx
│   │   ├── dingle/page.tsx
│   │   └── connemara/page.tsx
│   └── components/
│       ├── HeroSection.tsx
│       ├── ImageCard.tsx
│       └── ActivityCard.tsx
```

## Key Components

- **HeroSection**: Full-width hero with title, subtitle, and background image
- **ImageCard**: Card with image, title, description, and optional badge
- **ActivityCard**: Horizontal card for activities with age/cost info

## Adding/Editing Pages

Each destination has its own page in `src/app/[destination]/page.tsx`. The structure includes:
- Hero section
- Overview with dates and highlights
- Pull quote
- Highlights grid (4 cards)
- Activities section
- Lodging options
- Photo gallery
- Tips section

## Common Issues

### Images Not Loading
- Check the path starts with `/images/` (not `images/`)
- Verify the file exists in `/public/images/`
- Check for typos in filenames

### Next.js Image Component Errors
- Use regular `<img>` tags instead of Next.js `<Image>` for local images
- Add `{/* eslint-disable-next-line @next/next/no-img-element */}` comment before each `<img>` tag
