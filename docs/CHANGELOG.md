# Changelog

This changelog records material documentation, product, and technical changes.
It supports the maintainability commitments in [AGENTS.md](AGENTS.md) and the
business priorities in [VISION.md](VISION.md). Keep entries factual: do not
claim a release, performance gain, or business outcome that has not been
verified.

## Unreleased

### Documentation

- Consolidated project governance and strategy documentation in `/docs`.
- Established `AGENTS.md` as the canonical development standards document in
  this directory.
- Added `VISION.md` as the business strategy and decision-making reference.
- Added brand, component, content, design-system, SEO, launch, roadmap, and
  audit documentation.

### Product and quality status

- Current audit findings are documented in [PROJECT_AUDIT.md](PROJECT_AUDIT.md).
- The project currently has known route, lint, and build blockers; consult the
  audit and roadmap before treating the site as production-ready.

## Entry format

For future updates, add a dated release heading and group changes under:

- **Added** — New routes, capabilities, documentation, or approved content.
- **Changed** — Meaningful behavior, visual system, conversion, or SEO updates.
- **Fixed** — Verified defects that were resolved.
- **Deprecated** — Features or patterns scheduled for removal.
- **Removed** — Routes, components, assets, or content intentionally deleted.
- **Security** — Security or privacy changes, described without exposing
  sensitive implementation details.

Each entry should identify the customer or business impact and link to the
relevant route, component, pull request, or documentation when available.
