# Metro East Tree Pros Design System

This document translates the business direction in [VISION.md](VISION.md) and
the implementation standards in [AGENTS.md](AGENTS.md) into a practical visual
system. It applies to every page, component, and interaction.

## Design objective

The website should feel calm, capable, premium, and local. Design must reduce
customer uncertainty: visitors should quickly understand the service, see a
clear next step, and believe their property will be treated with care.

## Layout foundations

- Design mobile first. Use a single column until a second column improves
  scanning, not simply because desktop has more room.
- Use `max-w-7xl px-6` for broad page content and `max-w-5xl px-6` for focused
  FAQ and CTA content.
- Standard page sections use `py-20 sm:py-24`. Use larger spacing only for a
  genuine hero or campaign moment.
- Keep paragraphs constrained to `max-w-2xl` or `max-w-3xl` where readability
  benefits.
- Use white and `bg-slate-50` as alternating surfaces. Reserve `bg-gray-900`
  for confidence/process sections and `bg-green-700` for high-intent CTAs.

## Typography

Use one H1 per route, generally in the hero. Section headings use H2; card and
subtopic headings use H3. Headings should be outcome-led and concise.

| Role | Current pattern |
| --- | --- |
| Eyebrow | `text-sm font-bold uppercase tracking-[0.3em] text-green-700` |
| Section heading | `text-4xl font-black leading-tight sm:text-5xl` |
| Hero heading | `text-5xl font-black` through `lg:text-7xl` |
| Body | `text-lg leading-8 text-gray-600` |
| Dark-surface body | `text-gray-300` or `text-green-50` with equivalent leading |

Avoid walls of text, all-caps prose, generic slogans, and headings used only
for visual size.

## Color and contrast

The primary action and brand color is green (`green-700`), with dark green for
hover and pale green for dark-surface accent text. Main surfaces are white,
slate, and near-black. Main body text is `gray-900` with `gray-600` supporting
copy.

Maintain contrast at all times. Green text on white must remain dark enough to
read; hero text must have a sufficiently dark overlay. Color cannot be the only
way to communicate danger, focus, or state.

## Components and cards

- Cards have a job: comparison, process, benefit, proof, or a focused action.
- Default card shape is `rounded-2xl` or `rounded-3xl`; reserve
  `rounded-[2rem]` for larger feature panels.
- Use subtle borders and soft slate-tinted shadows. Do not create a new shadow
  language per page.
- Keep one dominant visual idea per section. Avoid combining busy photography,
  multiple badges, gradients, several card systems, and a large CTA in one
  viewport.
- Prefer typed data arrays and stable keys for repeated cards, process steps,
  benefits, and FAQs.

## Buttons and calls to action

Every CTA group contains one primary and, when helpful, one secondary action.
Primary actions use green or white-on-green; secondary actions use a high-
contrast outline or restrained translucent surface.

Preferred labels: “Request a Free Estimate,” “Call (314) 474-7087,” and
“Explore Tree Removal.” Labels must describe the real next action. Buttons and
links require a clear keyboard focus state and comfortable mobile touch target.

## Images and iconography

Use authentic, service-relevant photography. Images must have stable layout,
appropriate `sizes`, optimized formats/weights, and meaningful alt text.
Decorative images use an empty alt attribute. Use Lucide icons to help scanning,
not to fill space; decorative icons use `aria-hidden="true"`.

## Motion and responsiveness

Motion is subtle and optional: modest lift, shadow, border-color, or icon
translation on hover. It must never hide meaning or be required for use. At
narrow widths, buttons stack, grids simplify, headings remain readable, and
navigation stays fully reachable.

## Accessibility acceptance

Before approving visual work, verify semantic landmarks, one meaningful H1,
logical heading order, keyboard access, visible focus, form labels, contrast,
and a layout that works without hover. Refer to [AGENTS.md](AGENTS.md) for the
full required checklist.
