---
id: inputs
title: Inputs
permalink: docs/inputs.html
prev: extended-configurations.html
next: output-formats.html
redirect_from:
  - "docs/input"
---

To initiate the bundling process, you'll need to point to a static file residing on the system.

> Note
>
> Packem *v0.1.4* and below don't support the Multiple Inputs feature so their usage as far as this is concerned is highly discouraged. Additionally, the input field was originally called `root`, but is deprecated since *v0.2*.

Packem expects the `input` field to be a string i.e. `input: "index.js"`. This is in the case where only a single input point is desired. On the contrary, if you need to have multiple input points, you can specify them as an array of strings:

```yaml
input:
  - "./src/index.js"
  - "./app/utils.js"
```

When a bundle is generated, the module graph differentiates between regular and common dependencies. These common dependencies are then isolated into a seperate file which is dynamically imported into the runtime. Internally, this implementation results in:

```js
_packem.fetch("./bundle.commons.js").then(function() {
  _packem.require("mod_X7afIu4ee"); // "./src/index.js"
  _packem.require("mod_7a5efDqZ5"); // "./app/utils.js"
});
```

Take note that the common dependencies are imported first, then the individual bundles are called in the `then` arm of the fetch **in order of definition** in the configuration.
