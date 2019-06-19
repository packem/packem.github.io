---
title: "The Module Graph"
meta_title: "Packem - The Module Graph"
meta_description: "The module graph is a collection of module interfaces in the logical context that connects the source code to its final output."
keywords:
    - module
    - modules
    - module graph
sidebar: "docs"
---

The module graph is a collection of module interfaces in the logical context that connects the source code to its final output.

Using a tree to define a module graph is a pain point since a single mutation would require a visitor to traverse the branches just to reach a certain module. If two or more modules require each other, things become more difficult. Controlling duplication across branches is a burden.

If watch mode is enabled in `@packem/dev-plugin`, a deletion(s) can cause module(s) not to be removed from the module graph (_dangled modules_) and vice versa. So how should references be managed? All of these manipulations from the RC makes it even worse as they destroy _referential integrity_. No matter how much prettifiers and linters you happen to make use of, if you don't practice proper coding techniques, you would end up with unexpected results.

With this in mind, this approach caused a major shift in Packem's architecture. The module graph being refactored into a flat list containing extended module interfaces is profoundly easier to maintain, making issues like duplication, circular dependencies and code splitting a breeze. This is what a module graph as a flat list appears like during build time:

```typescript
export default [
  {
    id: "root",
    dependencies: ["sKAY2qXG"]
    ...
  },
  {
    id: "sKAY2qXG",
    bundle_parent: "root",
    dependencies: ["yFj2CkjK"]
    ...
  },
  {
    id: "yFj2CkjK",
    bundle_parent: "b34kURy3",
    dependencies: ["sKAY2qXG"]
    ...
  }
  ...
] as ModuleGraph;
```

As much as using functional patterns to update the module graph might prove useful, it is a huge leap into anti-performance. The general principle of Packem favors **performance over expression** without selling away features.
