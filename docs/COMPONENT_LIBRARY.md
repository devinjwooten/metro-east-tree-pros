# Component Library

This document records the current reusable UI inventory. Reuse an existing
component when the semantic and visual pattern fits; do not force unrelated
content into a generic abstraction.

## Layout primitives

| Component | Purpose | Notes |
| --- | --- | --- |
| `components/layout/Container.tsx` | Shared content-width wrapper | Use for consistent horizontal padding and maximum width. |
| `components/layout/Section.tsx` | Shared section wrapper | Use when its spacing and surface API match the design need. |
| `components/ui/SectionHeading.tsx` | Eyebrow, H2, optional highlight and description | Use for standard section headers; preserve heading hierarchy. |

## UI primitives

| Component | Purpose | Notes |
| --- | --- | --- |
| `components/ui/Button.tsx` | Internal navigation CTA | Requires an `href`; use descriptive children. |
| `components/ui/Card.tsx` | Premium card surface | Use only for real grouped content, not as a universal wrapper. |
| `components/services/ServiceHero.tsx` | Service-page hero | Requires `title`, `subtitle`, and a valid local image path. |

## Page sections

Existing home-page sections include `Hero`, `Services`, `WhyChooseUs`, `Stats`,
`Reviews`, and `Contact`. They establish the current premium service-site
language. Modify shared components carefully and test every consumer.

## Component rules

- Prefer typed local data arrays for repeated cards, benefits, processes, and
  FAQs.
- Use `next/link` for internal routes and `next/image` for local imagery where
  optimization and stable layout matter.
- Keep interaction server-rendered unless client state is necessary.
- Maintain visible focus states, semantic elements, and mobile-first grids.
- Do not create a component for a one-off text fragment. Extract stable patterns
  only after confirming real reuse.

Before adding a component, check whether an existing primitive can be extended
without turning it into an unclear collection of boolean props.
