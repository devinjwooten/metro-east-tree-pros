<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses the installed version of Next.js, not a remembered version.
APIs, conventions, and file structure may differ from training data. Before
writing or changing Next.js code, read the relevant guide in
`node_modules/next/dist/docs/` and heed its deprecation notices.
<!-- END:nextjs-agent-rules -->

# Metro East Tree Pros Development Constitution

This document is the operating standard for everyone who designs, writes,
reviews, or maintains Metro East Tree Pros. It is deliberately opinionated.
The goal is not to produce a merely functional website; the goal is to build
the most trusted, useful, and conversion-focused local tree-service website in
the Metro East.

Every change must make a defensible improvement to at least one of the
following: customer trust, usability, lead quality, accessibility, performance,
maintainability, local search visibility, clarity, or brand value. If a change
does not serve a customer, the business, or the codebase, do not make it.

## Mission

Help Metro East homeowners, property managers, and businesses confidently solve
tree-related problems by making expert service feel clear, safe, local, and
easy to request.

The site must turn uncertainty into action. A visitor may arrive after a storm,
while researching a large property project, or because a branch has become a
daily concern. In every case, the site should quickly answer:

- What does Metro East Tree Pros do?
- Can this team handle my situation safely?
- Do they serve my community?
- What should I do next?
- How do I get an estimate or urgent help?

The experience should communicate calm competence. Do not use fear to create
urgency; explain risk honestly and give visitors a practical next step.

## Project Goals

1. Generate qualified phone calls and estimate requests from local customers.
2. Build immediate credibility through clear service detail, responsible safety
   messaging, quality visual design, and transparent calls to action.
3. Earn durable local-search visibility with useful service and location
   content, not keyword repetition.
4. Make every important path easy to use on a phone, including in stressful
   emergency situations.
5. Maintain a fast, accessible, resilient site that can evolve without
   duplicating markup, styles, or business claims.

Primary conversions are calls to `(314) 474-7087` and free-estimate requests.
Secondary conversions include service-page exploration, contact form starts,
and visitors finding the correct service for their need.

## Brand Identity

Metro East Tree Pros is a professional local operator, not a commodity
directory listing and not a national franchise impersonation. The brand voice
is steady, experienced, direct, helpful, and respectful of property.

The brand should consistently convey:

- **Safety:** deliberate planning, proper equipment, controlled work, and
  sensible emergency guidance.
- **Professionalism:** clear scopes, punctual communication, clean presentation,
  and thorough cleanup.
- **Local accountability:** knowledge of the Metro East and an approachable,
  neighborly tone without empty hometown clichés.
- **Practical expertise:** recommendations should be specific and understandable,
  never inflated or technical for its own sake.
- **Respect:** for people, homes, landscaping, time, and budgets.

Use claims such as “licensed,” “insured,” “experienced crews,” “free
estimates,” or “emergency response” only when they are true, current, and
supportable by the business. Never invent awards, certifications, review
counts, insurance limits, response-time guarantees, pricing claims, or service
areas.

## Visual Design Standards

The visual system should feel premium, spacious, and purposeful. Each page
must have a visual rhythm, not a sequence of interchangeable boxes.

- Use a restrained palette: white and slate surfaces, near-black contrast
  sections, and the established green as the primary brand/action color.
- Use alternating white and light-slate sections to create scanning rhythm.
  Dark sections should be reserved for process, confidence, or high-contrast
  moments. Green sections should be reserved for important calls to action and
  high-confidence service statements.
- Use large rounded corners (`rounded-2xl`, `rounded-3xl`, or `rounded-[2rem]`)
  consistently. Do not introduce competing corner systems on one page.
- Cards need a reason to exist: comparison, categorization, process, proof, or
  a focused action. Do not wrap every paragraph in a card.
- Use shadows sparingly and softly. Prefer `shadow-sm` or slate-tinted shadows;
  reserve large shadows for hero imagery and important feature panels.
- Hover treatments should be subtle: a 2–4px visual lift, border-color change,
  shadow increase, or icon movement. Never rely on hover alone to convey
  essential information.
- Avoid decorative gradients that reduce contrast or obscure content. Gradients
  may support hero-image legibility or add depth to a key CTA, but must remain
  restrained.
- Use icons to support scanning, not as decoration. Icons must be consistent in
  stroke style and should normally come from the installed `lucide-react`
  package.

Every section needs one dominant visual idea. Do not combine a large photo,
three competing card treatments, a gradient, multiple badges, and a large CTA
in the same visual field.

## Typography

Typography is the main carrier of premium quality. Preserve the project’s
established bold, high-contrast headline style and readable body copy.

- One page must have exactly one meaningful `h1`, normally in the hero.
- Use `h2` for page-level sections and `h3` for cards, FAQ topics, and
  subsection titles. Never choose heading levels for visual size alone.
- Prefer concise, outcome-led headlines. A heading should make sense if read in
  isolation from the page.
- Maintain comfortable body line length. Use `max-w-2xl` or `max-w-3xl` for
  explanatory copy; do not stretch long paragraphs across the full viewport.
- Use strong heading sizes on desktop but scale them down thoughtfully for
  phones. Avoid text that wraps to four or five lines on a narrow screen.
- Body copy should normally use `leading-7` or `leading-8`; use `leading-9`
  only where the larger rhythm is warranted.
- Uppercase eyebrow labels are useful for section orientation. Keep them short,
  high contrast, and consistently styled with modest tracking.
- Avoid all-caps paragraphs, excessive exclamation marks, fake urgency, and
  generic marketing phrases such as “best in town” or “unmatched excellence.”

## Color & Spacing Philosophy

Spacing is a trust signal. Dense pages feel rushed; arbitrary whitespace feels
unfinished. Use an intentional section and component scale.

- Standard page sections should generally use `py-20 sm:py-24`.
- Use `max-w-7xl px-6` for broad content and `max-w-5xl px-6` for focused copy,
  FAQ, and CTA content.
- Keep internal card padding generous (`p-6` through `p-10`) and consistent.
- Create visual pauses between heading groups, content groups, and actions. Do
  not stack every element with the same margin token.
- Green text on white must be dark enough to meet contrast requirements. Use
  pale green only for decorative backgrounds or text on dark green surfaces.
- Never use color as the only indicator of status, priority, or interaction.

## Component Standards

Prefer reusable components when a pattern has stable behavior, semantics, and
visual intent across two or more places. Do not create a component merely to
move ten lines of markup out of a page.

- Inspect existing components before creating or changing a pattern. Reuse
  `ServiceHero` and established home-page components where they fit.
- A reusable component must have a clear API, sensible defaults only where they
  are safe, and explicit TypeScript props.
- Keep page-specific content in page files or typed local data arrays. Do not
  turn every small copy block into a global component.
- Prefer mapping typed arrays to repeated card, FAQ, benefit, or process markup.
  Keys must be stable and meaningful, never array indexes when unique content is
  available.
- Reusable components must not make false business claims or embed brittle
  page-specific URLs unless that is their explicit responsibility.
- Do not duplicate CTA markup if an existing CTA pattern can be safely reused.
  If a pattern diverges materially, document why and keep the visual language
  aligned.

## Next.js Architecture Standards

This repository uses the App Router. Preserve file-system routing and default
exports for all pages.

- Keep routes in `app/`. A public route requires a valid `page.tsx` default
  export.
- Prefer Server Components. Add `"use client"` only when browser APIs, stateful
  interaction, or client-only hooks are genuinely necessary.
- Use `next/link` for internal navigation. Do not use bare `<a>` elements for
  internal routes. Telephone links may use `Link` or an accessible `<a>` where
  appropriate; be consistent with project conventions.
- Use `next/image` for local image assets where image dimensions and layout
  benefit from optimization. Use `fill` only inside a correctly positioned,
  dimensioned container.
- Read the current local Next.js documentation before using version-sensitive
  APIs, metadata conventions, caching behavior, async route props, or new
  rendering patterns.
- Never create a link to a route that does not exist. If a service is marketed
  before its dedicated page is available, link to an existing service overview
  or contact path and record the route gap for follow-up.
- Do not add client-side animation libraries or global state for visual effects
  that Tailwind/CSS can handle.

## TypeScript Standards

TypeScript is a product-quality safeguard, not an obstacle to bypass.

- Keep `strict` TypeScript compatibility. Do not use `any`, broad type casts,
  `@ts-ignore`, or `eslint-disable` to suppress a problem without a documented,
  reviewed reason.
- Type public component props explicitly. Use inferred types for simple local
  values when inference is clearer than redundant annotations.
- Model repeated content with typed arrays when the shape is nontrivial or used
  by more than one rendering branch.
- Name components, props, and data for their business purpose: `EmergencyTreeServicePage`,
  `serviceAreas`, `estimateCta`, not `Thing`, `data2`, or `item` outside a short
  map callback.
- Keep imports ordered consistently: framework imports, third-party imports,
  then local aliases/relative imports. Remove unused imports immediately.
- Confirm every page has a valid default export and every referenced asset,
  component, and route exists before submitting work.

## Tailwind CSS Standards

Tailwind is the styling system. Keep utility strings readable and cohesive.

- Follow the existing responsive approach: base/mobile styles first, then
  `sm`, `md`, `lg`, and `xl` enhancements.
- Use established tokens and utilities before introducing arbitrary values.
  Arbitrary values are appropriate for deliberate art direction such as
  `rounded-[2rem]` or a specific hero height, not routine spacing.
- Group classes logically: layout, spacing, typography, color, decoration,
  interaction. Reformat overly long lines when readability suffers.
- Use semantic elements first; Tailwind classes do not replace semantics.
- Do not add global CSS, inline style objects, or hard-coded color values when
  an existing Tailwind pattern achieves the goal.
- Ensure interactive elements have visible focus styles. Do not remove outlines
  without replacing them with an accessible focus treatment.

## Accessibility Standards

Accessibility is a baseline requirement, especially for a service site used
under stressful conditions.

- Use semantic landmarks: one `main`, meaningful `header`, `nav`, `section`,
  `footer`, lists, articles, and forms where appropriate.
- Maintain logical heading order. Do not skip from `h1` to `h3`.
- Every action must be keyboard reachable, visibly focusable, and named by its
  text or accessible label.
- Buttons perform actions; links navigate. Do not use a styled `div` or a button
  for navigation.
- Use descriptive link text. “Learn more” is acceptable only when the nearby
  heading unambiguously supplies the service name; “Explore tree trimming” is
  better.
- Use `details`/`summary` for static FAQs when their native behavior is enough.
  Preserve the summary’s keyboard affordance and visible state.
- Images require meaningful alt text. Decorative images use `alt=""`; never
  repeat nearby captions or use filenames as alt text.
- Do not place important text only in images. Maintain sufficient contrast over
  hero imagery with a tested overlay.
- Form inputs require visible labels. Placeholders are hints, not labels. Set
  appropriate `name`, `type`, and `autoComplete` values.
- Use `aria-hidden="true"` for purely decorative icons. Do not add ARIA when
  native HTML already communicates the meaning.
- Respect reduced motion. Hover/transition effects must be subtle and cannot
  hide content or trigger disorientation.

## Performance Standards

Fast loading is conversion optimization. Visitors searching after a storm often
have poor connectivity and little patience.

- Optimize and size images before adding them. Do not reference imaginary or
  missing image assets.
- Give images stable dimensions or correctly sized fill containers to prevent
  layout shift. Only use `priority` for above-the-fold images that materially
  affect LCP.
- Prefer server-rendered content, CSS transitions, and native HTML over
  unnecessary client JavaScript.
- Avoid large carousels, auto-playing video, uncompressed galleries, embedded
  third-party widgets, and dependencies added solely for decoration.
- Keep DOM structure meaningful and shallow. A wrapper needs a layout,
  accessibility, or styling purpose.
- Audit images, fonts, and third-party scripts before launch. Document why each
  nonessential script is necessary.

## Mobile-First Requirements

The primary customer journey is mobile. Design at narrow widths first.

- Phone CTAs must be thumb-friendly, visually obvious, and not dependent on
  hover. Use a minimum comfortable target size, generally around 44px high.
- Buttons should stack naturally on small screens and avoid truncation.
- Cards must not become cramped two-column layouts at widths where text is
  unreadable; use responsive grid breakpoints deliberately.
- Check every hero heading, badge row, CTA pair, table-like list, form, and FAQ
  at narrow viewport widths.
- Critical telephone and estimate paths should appear before a visitor has to
  scroll through excessive content.
- Avoid fixed elements that cover content, cause viewport issues, or create
  accidental taps on mobile.

## SEO Standards

SEO is the result of useful, crawlable, technically sound content—not a list
of phrases appended to the footer.

- Give each route a clear search intent, unique primary topic, one descriptive
  `h1`, logical `h2`/`h3` hierarchy, and useful supporting content.
- Write specific service content: what the service solves, who needs it, what
  to expect, practical safety guidance, and a relevant next action.
- Use internal links to related services, the contact path, and service
  overviews when they help a visitor continue their task.
- Include locations naturally where the service coverage is relevant. Do not
  repeat a list of cities in every paragraph.
- Metadata must be unique, accurate, and aligned with the visible page. Do not
  promise response times, pricing, credentials, or geographic coverage that
  cannot be verified.
- Avoid duplicate title tags, generic descriptions, thin location pages, hidden
  keyword blocks, and pages created only to capture a city/service query.
- Use concise, human-readable URLs and preserve existing routes unless a
  migration plan and redirects are in place.

## Local SEO Strategy

Metro East Tree Pros serves Belleville, O'Fallon, Edwardsville, Collinsville,
Fairview Heights, Swansea, Shiloh, Columbia, Waterloo, and nearby Metro East
communities. Location references must help a customer understand coverage.

- Mention the Metro East naturally on primary service pages and in relevant
  CTAs, service-area sections, or proof points.
- Use individual city names where the copy has a genuine local context, such as
  a service area, a route-specific CTA, or verified project/customer proof.
- Do not fabricate project locations, testimonials, business addresses, or
  local partnerships.
- Build topical depth around tree removal, tree trimming, stump grinding,
  emergency tree service, storm cleanup, lot clearing, and land clearing only
  when those services are genuinely offered.
- Use location lists in a scannable service-area component rather than turning
  paragraphs into keyword inventories.
- Plan future location pages only when each can provide distinctive, useful
  information and can be maintained accurately.

## Conversion Rate Optimization Standards

Every page must make the next action obvious without appearing desperate.

- Lead with the customer outcome, then explain the service, then reinforce
  trust, then present a relevant action.
- Primary CTAs are “Request a Free Estimate” and a clearly formatted phone
  action. Emergency pages should prioritize “Call Now” while still offering a
  non-emergency estimate path.
- Place a CTA in or immediately after the hero, after a substantial trust or
  service section on long pages, and in a final high-contrast section.
- Keep CTA wording action-oriented and truthful. Avoid vague labels such as
  “Submit,” “Click Here,” or “Get Started” when the real action is an estimate
  request or phone call.
- Explain what happens next near a form or CTA: a free estimate, a call to
  discuss the property, or a clear next step. Never imply a guaranteed booking
  if the form is only an inquiry.
- Reduce friction: request only information needed for a useful first response.
  Do not require account creation, unnecessary checkboxes, or long forms.
- Build reassurance through process, cleanup expectations, equipment, safety,
  and honest communication—not unsupported “best” claims.

## Content Writing Guidelines

Write as a calm, knowledgeable local professional speaking to a homeowner.

- Start with the practical problem or desired outcome. Explain technical details
  only to the degree that they help a customer make a decision.
- Use short paragraphs, clear subheads, bullets, and FAQ content to make
  scanning easy.
- Favor concrete language: “branches over a driveway,” “clear access after a
  storm,” “cleanup after removal.” Avoid filler such as “industry-leading
  solutions” or “we are passionate about excellence.”
- Use “we” for the company and “you” for the customer. Do not overuse either.
- Avoid legal, insurance, arboricultural, or safety guarantees unless approved
  by the business. Provide responsible safety guidance; direct life-safety and
  utility emergencies to 911 and the utility provider where appropriate.
- Placeholder testimonials must be explicitly labeled as sample content and
  replaced with verified reviews before production publication.
- Proofread every apostrophe, city name, phone number, heading, and CTA. Use
  entities where necessary to satisfy JSX lint rules.

## Internal Linking Strategy

Internal links should guide visitors through a useful decision path.

- The home page should link to each active service route, contact, and service
  overview.
- Each service page should link to relevant adjacent services where useful—for
  example, removal to stump grinding, storm cleanup to emergency service, and
  trimming to removal when hazards are discovered.
- Use descriptive anchor text that identifies the destination.
- Do not create circular links that add no value or use sitewide link lists to
  force keyword relevance.
- Validate every href against the App Router before finishing a change.
- When adding a new route, add logical inbound links from the service overview,
  home page, navigation, and/or related service pages as appropriate.

## Calls-To-Action Standards

CTA design is part of the brand system.

- Use one primary CTA and one secondary CTA per action group. The primary CTA
  normally uses solid green or white-on-green treatment; the secondary CTA uses
  a strong outline or restrained translucent treatment.
- Preserve clear contrast, large tap targets, and visible hover/focus states.
- Keep CTA labels concise and specific: “Request a Free Estimate,” “Call
  (314) 474-7087,” or “Explore Tree Removal.”
- Do not use multiple visually identical CTAs with competing purposes in the
  same section.
- Emergency CTAs must never discourage calling 911 or the utility provider when
  a life-safety or downed-power-line condition exists.

## Trust Building Standards

Trust content should answer the doubts a homeowner has before contacting a
tree-service provider.

- Where accurate, reinforce licensed, insured, free estimates, professional
  cleanup, safety-first planning, experienced crews, modern equipment, and
  responsive communication.
- Make the process visible. A clear four-step process reduces perceived risk.
- Use authentic images, verified reviews, truthful service descriptions, and
  transparent expectations. Do not use stock-like claims or manufactured proof.
- Explain cleanup and property protection before the visitor has to ask.
- Use caution around insurance language. The site may explain documentation
  support but must not promise claim approval or speak for an insurer.

## Image Standards

- Use images that support the content and brand: real crews, equipment, safely
  performed work, finished properties, and relevant service contexts.
- Store local assets in the established public image directories with concise,
  descriptive filenames.
- Prefer modern, compressed formats when asset production allows. Do not use
  oversized files for small card images.
- Set meaningful `alt` text that describes the purpose of the image in context.
- Hero images must have enough dark overlay for text contrast without becoming
  muddy. Never place unreadable copy over a busy image.
- Do not reuse an unrelated service image without confirming that it still
  accurately represents the service. If a temporary reuse is unavoidable,
  record the needed asset replacement.

## Image Direction

Every image must feel like it belongs to the Metro East Tree Pros brand and
must follow the sitewide image rules in `IMAGE_STRATEGY.md`.

### Style

- Use photorealistic imagery with a modern, credible local-service feel.
- Prefer modern suburban homes, mature trees, and clean properties in summer
  or early-fall conditions with bright natural daylight.
- When crews are visible, show professional workers wearing matching Metro
  East Tree Pros shirts. Use clean white hard hats where the work requires
  them.
- Show modern trucks and equipment that look organized, well maintained, and
  appropriate to the service.
- Avoid stock-photo styling, watermarks, oversized logos, embedded text, and
  artificial-looking imagery.
- Do not imply that people, homes, trucks, crews, or locations belong to Metro
  East Tree Pros unless the business has approved that claim.

### Hero Images

- Every major page requires a unique hero image. Never reuse a hero image.
- Never reuse the homepage hero on a service or location page, or one service
  hero for another service.
- Use distinct camera angles and compositions while maintaining a consistent
  editing style, lighting quality, and natural green/slate color palette.
- Preserve a clear, darker copy-safe area for the hero heading and CTA on both
  desktop and mobile crops.
- If a suitable approved image is unavailable, use the branded visual fallback
  defined in `IMAGE_STRATEGY.md` and record the missing asset. Do not duplicate
  another page's hero.

### Finished Work Images

- Show a freshly cleaned yard, healthy trees, and fresh mulch where it is
  appropriate to the documented project.
- If people are included, they should appear naturally comfortable and should
  not be presented as customers or homeowners without permission.
- Keep equipment staged safely and professionally; cleanup and care for the
  property should be visible where that is part of the service story.

### Service Images

- **Tree Removal:** a large mature tree being safely removed with a controlled
  work area.
- **Tree Trimming:** an arborist trimming a healthy mature tree with sensible
  access and appropriate PPE.
- **Stump Grinding:** a grinder actively removing a stump with realistic wood
  chips and a clean surrounding work area.
- **Emergency Service:** a storm-damaged tree with a crew securing the area;
  never show unsafe power-line proximity or active danger.

### Location Pages

- Location pages may share this visual style, but every city must use a unique
  home, tree, and background.
- Do not name or visually associate a city with an image unless the location
  is approved and factually supported.

## Metadata Standards

- Add route-level metadata when creating or materially revising public pages.
- Titles should lead with the service or page intent and include Metro East Tree
  Pros naturally. Keep them distinct across routes.
- Descriptions should summarize the customer benefit, service, and relevant
  service area in natural language; they are not keyword containers.
- Use a canonical strategy appropriate to the deployed domain. Do not guess the
  production URL, social handles, or Open Graph image until confirmed.
- Open Graph and social metadata must represent the actual page and use valid,
  optimized image assets.

## Structured Data Requirements

Structured data must be accurate, maintained, and supported by visible page
content.

- Use JSON-LD only after business details have been verified: legal business
  name, address/service area, phone number, URL, hours, licenses, and review
  eligibility.
- Appropriate schema may include `LocalBusiness`, `ProfessionalService`,
  `Service`, `FAQPage`, and `BreadcrumbList` when the markup is truthful and
  compliant with current search-engine guidance.
- Never add review/rating markup for sample testimonials or reviews not
  collected and displayed according to applicable guidelines.
- Keep schema generation centralized where practical and validate it after
  deployment. Schema is not a substitute for visible, useful content.

## Error Prevention

Before editing, inspect the target page, related components, image assets,
routes, package scripts, and relevant local Next.js documentation. Preserve
existing work that is unrelated to the request.

- Do not overwrite a dirty worktree or revert others’ changes.
- Use `apply_patch` for source edits. Do not make unrelated formatting sweeps.
- Check service routes before adding links. Check `public` before adding image
  paths. Check imports before using a package symbol.
- Do not claim that a full build, global lint, or type check passes if an
  unrelated repository error blocks it. State the exact blocker and separately
  report targeted validation for the changed files.
- Treat empty routes, broken forms, missing assets, placeholder content, and
  invalid default exports as production risks, not cosmetic details.

## File Organization Rules

- Keep route-specific UI in its route directory and shared UI under
  `components/` in a meaningful subdirectory when the component is truly shared.
- Keep `app/page.tsx` focused on composing the home-page sections; keep each
  component responsible for one clear part of the experience.
- Do not add files for one-off fragments when a typed data array in the page is
  clearer.
- Avoid barrel files unless they solve an established import-management problem.
- Keep business copy, routes, and visual behavior close enough that future
  maintainers can understand the customer journey without hunting through the
  repository.

## Reusable Component Rules

- Before making a new component, search for an existing equivalent and assess
  whether it can be extended without creating an overly broad API.
- Extract only stable patterns with real reuse value. Two pages that look
  superficially similar may need different semantic structures.
- Keep reusable components accessible by default and avoid hidden assumptions
  about parent layouts, colors, or routing.
- Prefer composition over prop explosions. If a component needs many unrelated
  booleans, the abstraction is likely wrong.
- Update all consumers and run targeted checks whenever a shared component
  changes.

## Quality Assurance Checklist

Run this checklist before reporting a change complete:

- [ ] The target page and its surrounding design language were inspected first.
- [ ] Relevant local Next.js documentation was read for version-sensitive work.
- [ ] The page has one descriptive `h1` and logical heading order.
- [ ] All imports resolve; there are no unused imports or variables.
- [ ] The page has a valid React default export and uses App Router conventions.
- [ ] New or changed internal links target existing routes.
- [ ] New or changed images exist, have stable layout behavior, and useful alt
      text.
- [ ] Forms have labels, correct input types, and an intentional submission
      path.
- [ ] Keyboard navigation, focus states, contrast, and mobile layouts were
      considered.
- [ ] Content is accurate, human-readable, locally relevant, and free from
      unsupported claims or placeholder material presented as real.
- [ ] Primary and secondary CTAs are visible and specific.
- [ ] Targeted ESLint passes with no errors or warnings introduced by the change.
- [ ] Diff whitespace validation passes.
- [ ] The production build is run when practical. Any unrelated global blocker
      is reported with its exact file and error.
- [ ] The diff contains only intended files and changes.

## Pull Request Checklist

Every pull request should state the customer and business outcome, not merely
the files changed.

- [ ] Title describes the user-facing result.
- [ ] Description explains the problem, approach, conversion/UX/SEO impact, and
      any deliberate tradeoffs.
- [ ] Screenshots or responsive evidence are included for visual changes.
- [ ] New copy, location claims, credentials, testimonials, images, and
      structured data have been fact-checked.
- [ ] Links, forms, analytics events, and CTA destinations have been tested.
- [ ] Validation commands and results are included, along with any known
      unrelated blockers.
- [ ] No secrets, credentials, private customer data, build artifacts, or
      accidental generated files are included.
- [ ] The change is scoped, reviewable, and accompanied by migration notes when
      routes, metadata, or shared components change.

## Code Review Standards

Reviewers own the customer experience as well as code correctness. A change is
not approved simply because it renders.

Review for:

- Correctness, routing, imports, and default exports.
- Accessibility, semantics, focus behavior, and contrast.
- Mobile layout and CTA clarity.
- Local SEO relevance, heading structure, metadata, and internal links.
- Claims that require business verification.
- Design consistency without unnecessary visual repetition.
- Performance impact, image handling, and client-JavaScript cost.
- Reuse opportunities and duplicated markup or copy.
- Clear naming, small responsibilities, and maintainable TypeScript.

Give actionable review feedback: identify the customer or technical risk, cite
the relevant standard, and suggest a concrete improvement. Do not request
subjective changes without explaining the product rationale.

## Future Development Rules

Future work must strengthen the system, not erode it.

- Preserve this design language unless a documented brand evolution is approved.
- Build new service pages from the established premium structure while giving
  each page a distinct story, problem set, and visual emphasis.
- Add new services, locations, guarantees, reviews, prices, credentials, and
  business data only after verification with the business owner.
- Prioritize improvements that reduce customer uncertainty: better imagery,
  precise service explanations, form handling, authentic proof, fast emergency
  paths, and accurate metadata.
- When a page pattern repeats, evaluate a reusable component; when a component
  becomes too generic, simplify it rather than adding more flags.
- Avoid major dependencies unless they create a measurable benefit that native
  Next.js, React, and Tailwind cannot provide.
- Keep a record of known global validation blockers. Fix them deliberately; do
  not normalize failed builds or lint output.
- Before launch, perform an end-to-end review of all routes, forms, phone links,
  images, metadata, structured data, mobile rendering, performance, and
  accessibility.

The standard is simple: every visitor should leave with more confidence in Metro
East Tree Pros than they had when they arrived, and every maintainer should be
able to improve the site without compromising the system that earned that trust.
