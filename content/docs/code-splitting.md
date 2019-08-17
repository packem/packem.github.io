---
id: code-splitting
title: Code Splitting
permalink: docs/code-splitting.html
prev: getting-started.html
# next: extended-configurations.html
redirect_from:
  - "docs/codesplitting"
---

The `import()` ECMAScript proposal by Domenic Denicola allows dynamically loading modules. It is currently in stage 3 of the [TC39 process](https://tc39.github.io/process-document/).

> Warning
>
> Support for dynamic imports in Packem using the `dev-plugin` is early. Refer to the issues section of the [`packem-plugins`](https://github.com/packem/packem-plugins.git) repo.

## Example

Just use `import()` directly in your code. For example, if you have two modules, _A.js_ and _B.js_, to dynamically import the latter into the former and log the output, this is how one could accomplish it:

```javascript
// B.js

export default {
  isAvailable: true
};
```

```javascript
// A.js

// Using ES6's Promise API:
import("./B").then(console.log);

// Using `async/await` syntax
const exportsOfB = await import("./B");

console.log(exportsOfB);
```

## Under the Hood

In Packem, a dynamically imported module retains its own sub-graph in the module graph. Hypothetically, a simple interface to represent a chain of dynamic imports would look something like this:

```typescript
export default [
  // In essence, Packem fails without the `input` field being defined
  // in the configuration file.
  {
    id: "root",
    // Root never exhibits a parent because logically, the main bundle
    // cannot be a dynamic module since that would necessate loading into
    // some script. This is not a bug, but rather intended.
    bundle_id: "",
    dependencies: [
      // Module `sKAY2qXG` (mangled) is bundled with the root.
      "sKAY2qXG"
    ],
    ...
  },
  {
    id: "sKAY2qXG",
    // If `bundle_parent` corresponds to `root` then it's a regular
    // module.
    bundle_parent: "root",
    dependencies: [
      "yFj2CkjK", "vhjv3jjP", "zYqARjUK",
      "LPrhSMJz", "b34kURy3", "XnOhbVJ7"
    ],
    ...
  },
  {
    id: "yFj2CkjK",
    // This is a dynamically imported module that belongs to module
    // `b34kURy3`.
    bundle_parent: "b34kURy3",
    dependencies: [
      // Module `sKAY2qXG` (mangled) is bundled with the root.
      "sKAY2qXG"
    ],
    ...
  },
  ...
] as ModuleGraph;
```

Before Babel does any transformations, all `import()` statements are replaced with the mangled id. The serializer handles fetching of modules which is where the code splitting issue in `dev-plugin` originates from.

## References

- [Original TC39 proposal on dynamic imports.](https://github.com/tc39/proposal-dynamic-import)
- [Axel Rauschmayer's post on dynamic imports.](http://2ality.com/2017/01/import-operator.html)
