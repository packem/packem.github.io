---
id: output-formats
title: Output Formats
permalink: docs/output-formats.html
prev: modes.html
next: runtimes.html
redirect_from:
  - "docs/formats"
  - "docs/format"
---

Packem allows outputting bundles to multiple formats. A format is essentially an API/runtime-compliant version of the same bundled code like `IIFE`, `ESM`, `CommonJS`, `UMD`, `SystemJS`, etc.

> Note
>
> - Packem currently supports `CommonJS` and `IIFE` only.
> - When using the development tools, you can only output to the `IIFE` format.

Packem uses the serializer to pipe bundles into seperate **runtimes** once they are transformed so bundles remain uniform to the cycle in the sense that each format doesn't need its own module graph. This abstraction doesn't prevent the resolver from mangling imports except in the case of `CommonJS` and `ElectronEnv`.

## Formats Aliases

Since writing formats with their original names might cause clashes as far as naming semantics is concerned, Packem forces your output formats that exhibit an alias. These aliases are permanent and are bound not to break. Additionally, they are all in lowercase.

- `cjs` - CommonJS output format.
- `iife` - `IIFE` format.
