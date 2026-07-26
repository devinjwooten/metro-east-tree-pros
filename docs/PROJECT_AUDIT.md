# Metro East Tree Pros — Comprehensive Repository Audit

**Audit date:** 2026-07-26  
**Scope:** App Router routes, shared components, styles, configuration, assets,
metadata, internal navigation, documentation, and repository validation.  
**Method:** Static source review plus `npm run lint` and `npm run build`.

## Executive Summary

Metro East Tree Pros has a promising premium visual direction on the redesigned
home, tree trimming, stump grinding, and emergency tree-service experiences.
These pages use strong hierarchy, readable content, visible calls to action,
responsive grids, and native FAQ disclosure patterns. The new project
constitution and supporting documentation provide an unusually strong
foundation for consistent future work.

The repository is **not production-ready**. The primary customer journey is
broken: the `/contact` route is empty, the production build fails because that
route is not a module, and the estimate form has no submission behavior. Three
public routes (`/contact`, `/gallery`, and `/services/storm-cleanup`) are empty.
The globally mounted navigation sends visitors to anchor links that do not exist
on most routes, provides no visible mobile navigation, and includes an invalid
internal `<a>` link. Repository-wide lint reports 12 errors and one performance
warning.

The highest-return path is clear: restore valid public routes and a working lead
capture flow; repair navigation and global validation; then complete metadata,
image, and content-system work. These fixes will deliver far more value than
additional page polish while the site cannot reliably accept a lead.

## Scorecard

Scores reflect the current repository, not the intended design direction.

| Area | Score | Assessment |
| --- | ---: | --- |
| **Overall quality** | **49 / 100** | Strong pockets of design work, but critical routing, validation, and conversion gaps prevent launch. |
| **SEO** | **42 / 100** | Useful service copy exists, but route metadata, sitemap/robots, canonical strategy, and several public pages are absent. |
| **Performance** | **45 / 100** | Good use of `next/image` in many places, offset by very large JPEGs, a raw `<img>`, and no asset strategy. |
| **Conversion** | **35 / 100** | CTAs are well-presented but mostly lead to an empty route; the form does not submit. |
| **Design** | **68 / 100** | Redesigned service pages and home are strong; legacy tree removal/about patterns and global navigation are inconsistent. |
| **Accessibility** | **51 / 100** | Several good semantic patterns exist, but duplicate H1s, invalid/hidden navigation, and unverified mobile behavior are material issues. |
| **Maintainability** | **53 / 100** | TypeScript and App Router structure are sound; duplication, unused/incomplete routes, and failed global checks need attention. |

## Validation Evidence

### `npm run lint`

**Failed:** 12 errors and 1 warning.

- `app/services/tree-removal/page.tsx`: 3 `react/no-unescaped-entities`
  errors and 1 `@next/next/no-img-element` warning.
- `components/Footer.tsx`: 1 unescaped-entity error.
- `components/Navbar.tsx`: 1 `@next/next/no-html-link-for-pages` error.
- `components/about/AboutHero.tsx`: 1 unescaped-entity error.
- `components/about/CallToAction.tsx`: 2 unescaped-entity errors.
- `components/about/Mission.tsx`: 3 unescaped-entity errors.
- `components/about/ServiceArea.tsx`: 1 unescaped-entity error.

### `npm run build`

The optimized production compilation succeeds, but final TypeScript validation
fails because `app/contact/page.tsx` is empty and therefore not a valid module.
Next’s generated validator reports:

> File `app/contact/page.tsx` is not a module.

No release should proceed while lint and production type validation fail.

## Critical Findings

### C-01 — Public contact route is empty and blocks the production build

**Files:** `app/contact/page.tsx`; all CTA consumers  
**Categories:** Conversion, TypeScript quality, routing, accessibility, QA  
**Evidence:** The file is 0 bytes. `npm run build` fails during route type
validation. The home hero, service heroes, about CTAs, and final CTAs link to
`/contact`.

**Impact:** The principal free-estimate path is a broken destination and the
application cannot pass a production build.

**Recommendation:** Implement a real `/contact` page with a valid default
export, contact alternatives, accessible form fields, and a clearly configured
submission path. Validate the form end to end before launch.

### C-02 — Estimate form is present but has no submission implementation

**File:** `components/Contact.tsx`  
**Categories:** Conversion, UX, accessibility, maintainability  
**Evidence:** The `<form>` has no `action`, `onSubmit`, server action, success
state, validation strategy, spam protection, or error handling.

**Impact:** A visitor can spend time completing a form and receive no reliable
lead confirmation. This defeats the site’s primary conversion goal.

**Recommendation:** Choose and implement a production lead workflow (server
action, route handler, or approved provider), add validation and consent-aware
analytics, then test delivery, failure, and duplicate-submission states.

### C-03 — Two additional public routes are empty

**Files:** `app/gallery/page.tsx`, `app/services/storm-cleanup/page.tsx`  
**Categories:** UX, SEO, routing, local SEO, conversion  
**Evidence:** Both files are 0 bytes. `/gallery` is referenced from global
navigation/footer anchor patterns, and storm cleanup is presented as an active
service in the service overview and footer copy.

**Impact:** Users and crawlers encounter incomplete destinations; the service
catalog and site navigation do not match the available routes.

**Recommendation:** Build these routes before promoting them, or remove/replace
their public links and claims until complete. Each route needs a default export,
metadata, relevant content, and tested CTAs.

## High-Priority Findings

### H-01 — Global navigation is not usable as a site-wide navigation system

**File:** `components/Navbar.tsx`  
**Categories:** Navigation, responsive design, accessibility, internal linking,
conversion  
**Evidence:** Navigation uses `#services`, `#gallery`, and `#contact`; these
anchors exist only partially on the home page (`#services` and `#contact`), and
`#gallery` is absent. On service/about routes, all anchors resolve against the
current page rather than home. The link list is hidden below `md` with no mobile
menu or replacement. The home logo uses a bare `<a href="/">`, which ESLint
rejects.

**Impact:** Visitors cannot reliably reach services, gallery, or contact from
all pages, and mobile visitors lose all navigation except the call button.

**Recommendation:** Replace fragment-only global links with stable route links
or explicit `/#anchor` destinations; add an accessible mobile navigation;
convert the home link to `next/link`; and ensure every advertised destination
exists.

### H-02 — Site-wide H1 hierarchy is invalid on pages with a hero H1

**Files:** `components/Navbar.tsx`, home/service/about pages  
**Categories:** Accessibility, SEO, visual hierarchy  
**Evidence:** The fixed global navbar renders “Metro East Tree Pros” as an
`h1`, while `Hero`, `ServiceHero`, and `AboutHero` each render their own page
H1.

**Impact:** Most public pages have two H1 elements, weakening document outline
clarity for assistive technology and search engines.

**Recommendation:** Make the navbar brand a non-heading element (for example,
a styled `span` within the home link). Keep exactly one page-intent H1 per
route.

### H-03 — Repository quality gates are failing

**Files:** listed in Validation Evidence  
**Categories:** TypeScript quality, maintainability, QA, launch readiness  
**Evidence:** Full lint fails with 12 errors; build type-check fails.

**Impact:** The project cannot truthfully claim clean TypeScript/ESLint status,
and regressions can hide behind known failures.

**Recommendation:** Establish “green build, green lint” as the first release
milestone. Fix existing errors before introducing new visual work, and add CI
that runs lint and production build for each pull request.

### H-04 — Image payload is excessive and some service imagery is mismatched

**Files:** `public/images/**`, service pages, `app/services/tree-removal/page.tsx`  
**Categories:** Performance, UX, image optimization, branding  
**Evidence:** `crew.jpg` is ~8.7 MB, `hero.jpg` ~6.3 MB, `project6.jpg` ~5.4
MB, `project3.jpg` ~3.6 MB, and multiple assets are ~1–3 MB. Tree removal uses
a raw `<img>` and triggers the Next image lint warning. Stump grinding and
emergency tree service reuse the tree-removal hero, which does not provide
distinct service representation.

**Impact:** Slow mobile loads, reduced LCP performance, and lower trust from
generic/misaligned visual context.

**Recommendation:** Produce optimized, responsive WebP/AVIF service assets;
set `sizes` deliberately; replace raw `<img>` with `next/image`; and source
authentic imagery for stump grinding, emergency response, storm cleanup, and
land clearing.

### H-05 — Metadata strategy is limited to one generic root definition

**File:** `app/layout.tsx`  
**Categories:** SEO, local SEO, social sharing, maintainability  
**Evidence:** Only root metadata is exported. There is no route-level title,
description, Open Graph configuration, canonical metadata, `robots.ts`, or
`sitemap.ts` in the repository.

**Impact:** Every service page inherits generic metadata, limiting relevance,
click-through potential, and crawl/discovery control.

**Recommendation:** Add accurate route metadata for active pages after the
production domain and verified business details are supplied. Add sitemap and
robots configuration, then validate canonical and social-card output in the
deployed environment.

### H-06 — Current tree removal page is the major visual and technical outlier

**File:** `app/services/tree-removal/page.tsx`  
**Categories:** UI consistency, accessibility, performance, TypeScript/ESLint,
conversion  
**Evidence:** It retains older spacing (`py-24`), different card/shadow
treatments, raw `<img>`, lint errors, and a CTA nested inside the FAQ container
instead of following the same page rhythm as the redesigned services.

**Impact:** The site’s highest-intent service page feels inconsistent and keeps
the entire repository lint-red.

**Recommendation:** Redesign it using the established service-page system,
replace the raw image, correct JSX entities, preserve one H1 through
`ServiceHero`, and validate it against the same acceptance checklist as the
other service routes.

## Medium-Priority Findings

### M-01 — Internal linking is incomplete and inconsistent

**Files:** home, footer, navbar, service pages  
**Categories:** SEO, UX, conversion, navigation  
**Evidence:** Service pages contain final contact/call CTAs but few contextual
links to adjacent services. Footer service labels are plain text rather than
links. Home’s Lot & Land Clearing card points to the generic `/services` route
because no route exists. Global fragment links are unreliable.

**Recommendation:** Create a verified route map, then add descriptive service
links in footer/navigation and intentional adjacent-service links within each
service page. Do not link to a missing lot/land-clearing route until it exists.

### M-02 — About-page content follows a legacy visual system and contains
unverified claims

**Files:** `app/about/page.tsx`, `components/about/**`  
**Categories:** Branding, UI consistency, trust, accessibility, lint  
**Evidence:** About components use older utility patterns (`py-28`, `text-5xl`,
`shadow-2xl`, custom global classes) rather than the newer service-page rhythm.
`Mission.tsx` claims “100% Focused on customer satisfaction,” which is vague
and potentially unsupported. Several components fail lint due to JSX apostrophe
entities.

**Recommendation:** Bring the about route into the current design system,
replace generic/unsupported claims with verifiable proof or clearer value
statements, and resolve all lint errors.

### M-03 — Shared primitives and global CSS are only partially adopted

**Files:** `components/ui/**`, `components/layout/**`, `app/globals.css`  
**Categories:** Component reuse, Tailwind organization, maintainability  
**Evidence:** `SectionHeading` and `Card` are used by some about components;
the redesigned home and service pages mostly duplicate their own section/card
markup. `Container.tsx` and `Section.tsx` exist but need consumer/use review.
Global utility classes use a different spacing scale (`py-24 md:py-32`) than
newer pages (`py-20 sm:py-24`).

**Recommendation:** Decide on a small, documented set of primitives and update
only patterns with true reuse. Align section/container/card tokens; avoid a
large refactor that would force distinct page structures into one abstraction.

### M-04 — Contact information is not fully actionable

**Files:** `components/Contact.tsx`, `components/Footer.tsx`  
**Categories:** Conversion, accessibility, UX  
**Evidence:** Phone and email are rendered as plain text in the contact section
and footer rather than `tel:`/`mailto:` actions. This adds friction on mobile.

**Recommendation:** Convert verified phone/email values into accessible links;
use a single configuration source for business contact data once verified.

### M-05 — Review presentation is safely labeled but cannot ship as proof

**File:** `components/Reviews.tsx`  
**Categories:** Trust, copywriting, SEO, launch readiness  
**Evidence:** The component explicitly labels its cards as sample testimonials,
which is correct. The cards still render five-star visual ratings and should not
remain in a published production experience as trust proof.

**Recommendation:** Replace sample content with permissioned, verified reviews
before launch; do not add aggregate-rating/review schema until the underlying
data is eligible and verified.

### M-06 — Root font and color behavior are not aligned with the stated system

**File:** `app/globals.css`  
**Categories:** Branding, Tailwind organization, accessibility  
**Evidence:** The default body uses Arial/Helvetica while theme variables refer
to Geist fonts that are not configured in the root layout. A dark-mode media
query changes root background/foreground, while the body is explicitly styled
white/gray in `app/layout.tsx`.

**Recommendation:** Choose a deliberate font strategy and one color-scheme
behavior. Configure the chosen font through Next’s supported approach or remove
unused font variables; validate contrast in both intended modes.

### M-07 — Public documentation and code guidance are partially stale

**Files:** `README.md`, `CLAUDE.md`, `docs/AGENTS.md`, `docs/**`  
**Categories:** Maintainability, onboarding  
**Evidence:** `README.md` remains the default create-next-app text and says the
project uses `next/font`/Geist even though the root layout does not configure it.
`CLAUDE.md` only points to `AGENTS.md`. The new docs are useful, but execution
status in `docs/PROJECT_ROADMAP.md` should be kept current.

**Recommendation:** Replace the README with accurate setup, validation, route,
asset, environment, and deployment guidance; keep the root constitution as the
single source of standards and update documentation alongside material changes.

## Low-Priority Findings

### L-01 — Global footer navigation lacks service destinations and uses anchors

**File:** `components/Footer.tsx`  
**Categories:** UX, internal linking, local SEO  
**Evidence:** Quick links use page-local fragment links and service names are not
links. It also has an unescaped apostrophe lint error.

**Recommendation:** Use route links, add a concise active-service list, correct
the entity, and avoid linking to incomplete routes.

### L-02 — Gallery component is not currently composed into a public page

**Files:** `components/Gallery.tsx`, `app/gallery/page.tsx`, home page  
**Categories:** Folder organization, UI, performance  
**Evidence:** The component contains a complete project gallery, while the
gallery route is empty and the home page does not render it. Images are large.

**Recommendation:** Decide whether gallery is a strategic trust/conversion
asset. If yes, complete the gallery route with optimized images and genuine
project metadata; otherwise remove broken navigation references until ready.

### L-03 — Formatting/readability varies across older components

**Files:** several `components/about/**`, `components/Contact.tsx`  
**Categories:** TypeScript quality, maintainability  
**Evidence:** Several JSX elements are kept on one long line, and legacy
comments/spacing vary widely from newly redesigned files.

**Recommendation:** Apply scoped formatting when touching a file; add a
formatter/prettier policy only if the team agrees to enforce it consistently.

## Enhancements

### E-01 — Add a verified business-data module

Centralize confirmed business name, phone, email, service areas, hours, and
social/canonical URL once supplied by the owner. This will reduce copy drift in
the navbar, footer, contact pages, metadata, schema, and CTA components.

### E-02 — Add structured data after business facts are verified

Implement `ProfessionalService`/`LocalBusiness` and service/FAQ/breadcrumb
schema only when the legal name, domain, service-area model, hours, contact
details, and eligible reviews are confirmed.

### E-03 — Add a lightweight visual regression and accessibility routine

For key routes, capture mobile and desktop screenshots, check keyboard flow,
run an automated accessibility scan, and review images/contrast before release.

### E-04 — Establish conversion analytics with privacy review

Measure click-to-call, primary CTA, form start, and form completion events only
after selecting an analytics provider, defining consent requirements, and
documenting event ownership.

### E-05 — Create a content and asset intake process

Request verified service facts, image permissions, actual reviews, project
locations, and brand/logo files through a repeatable checklist. This is the
best way to replace generic content without introducing unsupported claims.

## Route and Page Inventory

| Route | Status | Notes |
| --- | --- | --- |
| `/` | Functional composition | Premium redesign present; CTAs depend on broken `/contact`; global nav remains broken on mobile/anchors. |
| `/about` | Functional composition | Good content depth but legacy styles, lint errors, and generic claims. |
| `/contact` | **Empty / build-blocking** | Must be implemented before launch. |
| `/gallery` | **Empty** | Gallery component exists but is not routed. |
| `/services` | Functional | Service overview is readable but legacy visual system and needs stronger CTA/metadata/link strategy. |
| `/services/tree-removal` | Functional but noncompliant | Major visual outlier; lint errors and raw image. |
| `/services/tree-trimming` | Functional | Strong page structure; needs metadata, contextual service links, authentic/optimized assets. |
| `/services/stump-grinding` | Functional | Strong structure; uses unrelated removal hero pending service-specific photography. |
| `/services/emergency-tree-service` | Functional | Strong safety content; uses unrelated removal hero and needs metadata/verified emergency claims. |
| `/services/storm-cleanup` | **Empty** | Advertised service but no route implementation. |

## Component and Configuration Inventory

| Area | Assessment |
| --- | --- |
| `ServiceHero` | Useful shared service hero with valid typed props and Next image use. It embeds duplicated CTA copy and has no service-specific trust/urgent variant. |
| Home sections | Newer design language is cohesive, but `Contact` needs a working backend and global nav alignment. |
| About sections | Useful page composition, but older tokens and lint failures create divergence. |
| `Button`, `Card`, `SectionHeading` | Reasonable primitives, but adoption is inconsistent. Consolidate only stable patterns. |
| `Container`, `Section` | Present in repository; assess and either adopt deliberately or remove if unused after verification. |
| `globals.css` | Has useful legacy utility classes, but global and new-page token scales conflict. |
| `app/layout.tsx` | Valid root layout and baseline metadata; needs site-level metadata strategy, clean header semantics, and an intentional font/theme setup. |
| `next.config.ts` | Minimal and valid; React Compiler enabled. Document/testing implications should be understood before relying on it. |
| ESLint/TypeScript config | Modern baseline with strict TypeScript; existing source does not meet it. |

## Prioritized Roadmap: Highest ROI to Lowest ROI

1. **Restore the lead path (Critical).** Implement `/contact`; wire secure form
   submission, validation, success/error states, spam protection, and tested
   notifications. Ensure every CTA has a working destination.
2. **Make quality gates green (Critical).** Fix the 12 lint errors, raw image
   warning, and the build-blocking empty module. Add CI for `npm run lint` and
   `npm run build`.
3. **Repair global navigation (High).** Build an accessible mobile menu; replace
   ambiguous fragment links with valid routes or explicit home anchors; remove
   duplicate H1 behavior from the navbar.
4. **Complete or unpublish incomplete routes (High).** Build contact, gallery,
   and storm-cleanup pages, or remove their public promotion until ready.
5. **Standardize tree removal and about pages (High).** Bring them into the
   current premium design system, remove unsupported/generic claims, and resolve
   their lint/performance issues.
6. **Ship route-level metadata and crawl controls (High).** After verified
   business/domain details, add unique metadata, sitemap, robots, canonical,
   and social sharing configuration.
7. **Optimize image pipeline and replace temporary imagery (High).** Resize,
   compress, convert assets, add `sizes`, use `next/image`, and acquire
   service-specific photography.
8. **Strengthen internal links and footer (Medium).** Add valid service links,
   related-service paths, actionable phone/email links, and a consistent route
   map.
9. **Consolidate stable design primitives (Medium).** Align container/section/
   card tokens and remove or adopt unused layout primitives intentionally.
10. **Replace sample proof with verified proof (Medium).** Add approved reviews,
    project images, and business credentials; then assess schema eligibility.
11. **Implement measurement and iterative CRO (Enhancement).** Add privacy-aware
    analytics, track calls/forms/CTAs, and test improvements using real data.
12. **Maintain documentation and release discipline (Enhancement).** Update the
    README and roadmap, retain `docs/AGENTS.md` as canonical, and make the
    launch checklist part of every production release.

## Audit Limitations

This is a repository audit, not a live-production crawl or visual-device test.
It does not verify business claims, production headers, deployed canonical URL,
analytics, real form delivery, network performance, legal consent, or the
quality/licensing of source photography. Validate those items in staging and
with the business owner before launch.
