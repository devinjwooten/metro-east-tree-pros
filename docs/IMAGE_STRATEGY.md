# Metro East Tree Pros Image Strategy

## Purpose

This document defines how Metro East Tree Pros should select, name, prepare,
and use photography across the website. It supports the project mission in
`VISION.md`: make visitors feel that the team is professional, safe, local,
and easy to trust before they make contact. It also follows the performance,
accessibility, brand, and truthfulness principles described in `AGENTS.md`.

The objective is not simply to place attractive images. Every primary image
should clarify the service, improve perceived credibility, preserve readable
copy, and avoid implying that a stock, illustrative, or unverified photo is a
specific local job.

## Operating Rules

1. Every primary public page gets one dedicated hero image. A hero asset may
   not be used as the hero for another page.
2. A secondary image may be reused only when it has a different storytelling
   role, such as a crew-detail image in a trust section. It must not create
   visual repetition in adjacent pages.
3. Do not label a photo as a completed project, local project, crew member,
   city, or customer property unless that association is approved and
   documented by the business.
4. Prefer authentic Metro East Tree Pros photography. Licensed stock imagery is
   acceptable only as a temporary illustration and must not be presented as
   company work.
5. Never use a generic landscape as proof of a specific city. A city image
   needs an approved, factual connection to that city.
6. Hero images must leave an intentionally quiet/darker area for the headline
   and CTA. Do not place faces, saws, trucks, or important safety action behind
   text.
7. Before an image is used, confirm rights, people/property permissions,
   truthful captioning, dimensions, compression, crop safety, and descriptive
   alt text.

## Current Image Inventory

The dimensions and sizes below were read from the current `public/images`
directory. “Use” describes current code references, not a claim about the
photo’s real-world subject or provenance.

| Current path | Dimensions | Approx. size | Current use | Notes |
| --- | ---: | ---: | --- | --- |
| `/images/logo.png` | 1254 × 1254 | 1.1 MB | Site navigation | Brand mark; not a content or hero image. |
| `/images/hero.jpg` | 5232 × 3488 | 6.0 MB | Homepage hero | Current dedicated homepage hero. Needs compression review before launch because of file size. |
| `/images/hero2.jpg` | 4000 × 1792 | 1.5 MB | None | Currently unused. Do not assign as a hero without visual and rights review. |
| `/images/crew.jpg` | 3064 × 3987 | 8.3 MB | `WhyChooseUs` | Secondary trust image. Portrait orientation; too large for its present role without optimization. |
| `/images/about/about-hero.jpg` | 1536 × 1024 | 636 KB | About hero | Current dedicated About hero. |
| `/images/about/about-story.jpg` | 2048 × 1152 | 448 KB | About mission section | Secondary About image. |
| `/images/about/cta-bg.jpg` | 4608 × 3072 | 2.8 MB | About CTA background | Byte-identical to `/images/services/tree-removal-hero.jpg`; retain only one approved source asset in a future cleanup. |
| `/images/services/tree-removal-hero.jpg` | 4608 × 3072 | 2.8 MB | Tree Removal hero; also Stump Grinding, Emergency Tree Service, and Storm Cleanup heroes | Current primary reuse problem. It must remain Tree Removal only once unique replacements exist. |
| `/images/services/tree-removal-benefits.jpg` | 1536 × 1024 | 697 KB | Tree Removal benefits section | Secondary Tree Removal image. |
| `/images/services/tree-trimming-hero.jpg` | 1535 × 1024 | 692 KB | Tree Trimming hero | Current dedicated Tree Trimming hero. |
| `/images/projects/project1.jpg` | 1023 × 1537 | 1.8 MB | Gallery sample visual | Portrait gallery asset. |
| `/images/projects/project2.jpg` | 2592 × 1944 | 1.4 MB | Gallery sample visual | Gallery asset. |
| `/images/projects/project3.jpg` | 3290 × 4387 | 3.5 MB | Gallery sample visual | Portrait gallery asset. |
| `/images/projects/project4.jpg` | 1536 × 1024 | 1.4 MB | Gallery sample visual | Gallery asset. |
| `/images/projects/project5.jpg` | 4818 × 3198 | 1.8 MB | Gallery sample visual | Gallery asset. |
| `/images/projects/project6.jpg` | 5555 × 3703 | 5.1 MB | Gallery sample visual | Gallery asset; needs compression review. |

## Current Reuse and Gaps

### Hero reuse

| Image | Current hero assignments | Required correction |
| --- | --- | --- |
| `/images/services/tree-removal-hero.jpg` | Tree Removal, Stump Grinding, Emergency Tree Service, Storm Cleanup | Reserve it for Tree Removal. Supply three new service-specific hero files before changing code. |
| `/images/hero.jpg` | Homepage only | Keep as the homepage hero unless a superior approved company image is supplied. |
| `/images/services/tree-trimming-hero.jpg` | Tree Trimming only | Keep as the Tree Trimming hero. |
| `/images/about/about-hero.jpg` | About only | Keep as the About hero. |

### Duplicate files

`/images/about/cta-bg.jpg` and `/images/services/tree-removal-hero.jpg` have
the same SHA-256 hash. They are duplicate bytes under different names. This is
both a performance and maintainability issue. In a future image implementation,
retain one approved source, create an independently composed About CTA image if
needed, and update references deliberately.

### Pages without a dedicated hero image

- Contact currently uses a solid dark hero and needs a dedicated Contact asset.
- Gallery currently uses a solid dark hero and needs a dedicated Gallery asset.
- No city landing pages currently exist. Every future city page needs its own
  verified local image; do not create the routes merely to consume imagery.

## Hero Assignment Plan

“Required asset” means the file does not exist in this repository today. These
paths are recommendations only; do not reference them in page code until the
approved image file has been supplied and reviewed.

| Page | Route | Recommended hero path | Status | Subject and composition | Preferred crop |
| --- | --- | --- | --- | --- | --- |
| Homepage | `/` | `/images/hero.jpg` | Existing | Wide, authentic tree-service scene that communicates a capable crew and a cared-for residential setting. Keep headline space on the left or right. | 16:9 source; display around 2.2:1 to 2.8:1 with a safe text zone. |
| Tree Removal | `/services/tree-removal` | `/images/services/tree-removal-hero.jpg` | Existing | Controlled removal scene: crew, rigging, equipment, and safe work perimeter. Avoid a dramatic/fear-based fallen-tree image. | 16:9 source; hero display around 2.2:1. |
| Tree Trimming | `/services/tree-trimming` | `/images/services/tree-trimming-hero.jpg` | Existing | Purposeful canopy pruning with a clearly protected work area and healthy, maintained property. | 16:9 source; hero display around 2.2:1. |
| Stump Grinding | `/services/stump-grinding` | `/images/services/stump-grinding-hero.jpg` | Required asset | Low-angle, professional stump grinder at work with a neat lawn edge, controlled debris, and visible operator PPE. | 16:9 source; hero display around 2.2:1. |
| Emergency Tree Service | `/services/emergency-tree-service` | `/images/services/emergency-tree-service-hero.jpg` | Required asset | Daylight or blue-hour post-storm assessment with a crew safely evaluating a downed limb or blocked driveway. Do not show active danger, damaged people, or unsafe power-line proximity. | 16:9 source; hero display around 2.2:1. |
| Storm Cleanup | `/services/storm-cleanup` | `/images/services/storm-cleanup-hero.jpg` | Required asset | Organized removal of storm debris with a clear access path and visible cleanup progress. Distinct from emergency assessment imagery. | 16:9 source; hero display around 2.2:1. |
| About | `/about` | `/images/about/about-hero.jpg` | Existing | Professional, welcoming crew/company story image. It should feel human and organized rather than staged. | 16:9 source; display around 2.2:1. |
| Contact | `/contact` | `/images/contact/contact-hero.jpg` | Required asset | Calm, approachable crew member or team beside a clean truck/equipment setup, with negative space for “Get a Free Estimate.” | 16:9 source; display around 2.2:1. |
| Gallery | `/gallery` | `/images/gallery/gallery-hero.jpg` | Required asset | A broad, well-composed overview of approved before-and-after or completed work imagery, without claiming an unverified location. | 16:9 source; display around 2.2:1. |

## Future City Landing-Page Hero Plan

No city landing-page routes exist today. The following asset plan applies only
after a city page has verified, useful local content and an approved route.
Each image must be unique, must have rights cleared, and must be factually
connected to the named community. A generic tree photo must not be renamed as
city-specific proof.

| Future city page | Required hero path | Required subject matter | Preferred crop |
| --- | --- | --- | --- |
| Belleville | `/images/cities/belleville-tree-service-hero.jpg` | Approved Belleville residential or commercial tree-service context, ideally with a recognizable but non-distracting local setting. | 16:9 source; 2.2:1 display. |
| O'Fallon | `/images/cities/ofallon-tree-service-hero.jpg` | Approved O'Fallon property/tree-work context that is visually distinct from Belleville. | 16:9 source; 2.2:1 display. |
| Edwardsville | `/images/cities/edwardsville-tree-service-hero.jpg` | Approved Edwardsville setting with mature canopy or carefully managed property access. | 16:9 source; 2.2:1 display. |
| Collinsville | `/images/cities/collinsville-tree-service-hero.jpg` | Approved Collinsville residential, commercial, or municipal-adjacent setting only if permission is documented. | 16:9 source; 2.2:1 display. |
| Fairview Heights | `/images/cities/fairview-heights-tree-service-hero.jpg` | Approved Fairview Heights property setting; avoid relying on retail or public landmarks without permission. | 16:9 source; 2.2:1 display. |
| Swansea | `/images/cities/swansea-tree-service-hero.jpg` | Approved Swansea property/tree-care context, distinct in framing and season from other city heroes. | 16:9 source; 2.2:1 display. |
| Shiloh | `/images/cities/shiloh-tree-service-hero.jpg` | Approved Shiloh property setting that truthfully supports the service-area page. | 16:9 source; 2.2:1 display. |
| Columbia | `/images/cities/columbia-tree-service-hero.jpg` | Approved Columbia tree-service context; no riverfront/landmark claim unless the image is genuinely from that location. | 16:9 source; 2.2:1 display. |
| Waterloo | `/images/cities/waterloo-tree-service-hero.jpg` | Approved Waterloo residential or commercial work setting, composed with copy-safe negative space. | 16:9 source; 2.2:1 display. |

## Visual Direction

All approved imagery should feel like one photo system:

- **Realism:** documentary-style local service photography, not glossy stock
  imagery or AI-looking scenes.
- **Lighting:** natural daylight, overcast soft light, or restrained golden-hour
  light. Avoid mixed color temperatures, harsh flash, and excessively dark
  storm imagery.
- **Color:** healthy greens, natural bark/soil tones, clean neutral equipment,
  and a restrained palette that works with the site’s green, slate, and white
  design system.
- **Safety:** show appropriate PPE, controlled work zones, safe distance from
  hazards, and tidy job sites. Never depict unsafe climbing, chainsaw use,
  downed utility lines, or people beneath active cutting.
- **People:** when people are visible, prefer authentic crew members with
  permission. Keep faces natural and do not use employees as generic stock
  “experts.”
- **Composition:** one clear story per image. Use depth, a practical focal
  point, and approximately 35–45% quiet space for hero copy after the intended
  crop is applied.

## Delivery and Naming Standards

### File names

Use lowercase kebab-case and place files in a purpose-based folder:

```
public/images/
  services/
    tree-removal-hero.jpg
    tree-removal-benefits.jpg
    stump-grinding-hero.jpg
  about/
    about-hero.jpg
  contact/
    contact-hero.jpg
  gallery/
    gallery-hero.jpg
  cities/
    belleville-tree-service-hero.jpg
```

Use `-hero`, `-benefits`, `-process`, `-crew`, `-before`, and `-after` suffixes
only when they describe the image’s role. Do not use `final`, `new`, `image1`,
city names that are not verified, or duplicate files under different names.

### Formats and sizes

- Deliver a high-quality master plus an optimized web derivative.
- Use AVIF or WebP where the approved delivery workflow supports it; retain a
  JPEG fallback only when required by the implementation.
- Hero sources should be at least 2400 × 1350 pixels. Do not ship much larger
  files merely because they are available; size the derivative for the actual
  rendered crop.
- Aim for a hero derivative below roughly 500 KB when image quality permits;
  inspect mobile performance rather than applying a blind file-size limit.
- Provide width/height metadata and test desktop, tablet, and narrow mobile
  crops before use.
- Never mark a non-hero below-the-fold image as `priority`. Reserve priority
  loading for the one meaningful above-the-fold image on a route.

## Alt-Text Guidance

Alt text must describe the meaningful visual information, not repeat a page
heading, list keywords, or identify an unverified location.

Good patterns:

- “Tree-service crew preparing a controlled removal beside a residential yard”
- “Arborist pruning branches above a driveway with protective equipment”
- “Stump grinder clearing an old stump from a lawn”
- “Crew assessing storm-damaged branches beside a blocked driveway”

Avoid:

- “Tree removal Belleville O'Fallon Edwardsville tree service”
- “Best tree company image”
- “Metro East Tree Pros completed project in [city]” unless verified
- File names, “image,” “photo,” or descriptions of decorative overlays

Use `alt=""` only when an image is genuinely decorative and nearby text already
communicates its purpose. A hero that establishes the service context normally
needs concise, meaningful alternative text.

## Duplicate-Hero Prevention Checklist

Before merging a page or image update, verify:

- [ ] The hero path is unique among all public-page heroes.
- [ ] The image’s subject supports the page’s specific service or company
      story.
- [ ] A reverse-image/asset-library search found no duplicate under a different
      filename.
- [ ] The photo is not falsely labeled as a local project or city.
- [ ] Desktop and mobile crops preserve both the focal point and text-safe area.
- [ ] The final asset is compressed, sized, and referenced with `next/image`.
- [ ] Alt text describes the image accurately and does not keyword stuff.
- [ ] The visual treatment matches the approved realism, safety, and lighting
      direction.

## Missing-Image Fallback Behavior

Do not add a page reference to a required asset until it exists in
`public/images` and has passed review. If an approved hero becomes unavailable:

1. Keep the route live with the existing high-contrast color/gradient hero and
   fully visible heading, description, and CTA.
2. Do not substitute another service page’s hero merely to fill the space.
3. Do not use a broken image, empty `src`, or remote placeholder.
4. Add a temporary, truthful non-image treatment rather than an unverified
   stock or AI image.
5. Track the missing approved asset in the implementation task before changing
   page code.

This fallback preserves conversion clarity, accessibility, and visual quality
while avoiding duplication and false proof.

## Implementation Asset Checklist

This checklist reflects the files currently present in `public/images` after
the hero-assignment implementation. No code references any missing path.

### Active branded fallbacks until supplied

- [ ] `/images/services/stump-grinding-hero.jpg` — Stump Grinding currently
      uses the shared branded gradient fallback.
- [ ] `/images/services/emergency-tree-service-hero.jpg` — Emergency Tree
      Service currently uses the shared branded gradient fallback.
- [ ] `/images/services/storm-cleanup-hero.jpg` — Storm Cleanup currently uses
      the shared branded gradient fallback.
- [ ] `/images/contact/contact-hero.jpg` — Contact currently uses a branded
      gradient fallback.
- [ ] `/images/gallery/gallery-hero.jpg` — Gallery currently uses a branded
      gradient fallback.

### Planned paths not yet supplied

- [ ] `/images/home/home-hero.jpg` — The homepage retains the existing,
      unique `/images/hero.jpg` until this approved replacement is supplied.
- [ ] `/images/locations/belleville-hero.jpg`
- [ ] `/images/locations/ofallon-hero.jpg`
- [ ] `/images/locations/edwardsville-hero.jpg`
- [ ] `/images/locations/collinsville-hero.jpg`
- [ ] `/images/locations/fairview-heights-hero.jpg`
- [ ] `/images/locations/swansea-hero.jpg`
- [ ] `/images/locations/shiloh-hero.jpg`
- [ ] `/images/locations/columbia-hero.jpg`
- [ ] `/images/locations/waterloo-hero.jpg`

City landing pages do not exist yet. Do not add city hero files to page code
until a corresponding page has verified, useful local content and the image
has been approved as truthful for that community.
