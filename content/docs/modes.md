---
id: modes
title: Modes
permalink: docs/modes.html
prev: inputs.html
next: output-formats.html
redirect_from:
  - "docs/mode"
---

A mode defines whether Packem should bundle in production or development. This is important since Packem applies most optimizations in production mode.

In the current implementation, only two modes are defined:

- `development`
- `production`

If `production` is passed to the mode field, Packem will ignore development-related operations, plugins, helpers, etc. In *v1.0*, treeshaking will be conducted on the bundles in this mode.
