---
id: execution-contexts
title: Execution Contexts
permalink: docs/execution-contexts.html
next: the-module-graph.html
redirect_from:
  - "docs/contexts"
  - "docs/logical-context"
  - "docs/runtime-context"
  - "docs/lc"
  - "docs/rc"
---

An execution context is an isolated layer in the bundling cycle that is allocated a set task that generalizes the concept of bundling in Packem.

Previously, we've mentioned that Packem uses OS-specific precompiled binaries to handle bigger tasks in the bundling cycle such as module graph generation. However, to integrate with tools like Babel and such, a custom runtime in Rust would be necessary. However this means much more than it sounds. Creating an entire runtime in Rust that strictly follows ECMAScript's standards is exceedingly difficult, yet not impossible.

**Packem does not exclusively rely on JavaScript (Node)** especially where heavy operations are concerned. A workaround is to use FFI bindings to be able to allocate a specific task to each layer of Packem. Each layer is called an *execution context* and there exists only two such contexts:

- **Runtime Context (RC)** - The portions of Packem that are best represented in JavaScript on Node. The JavaScript source-to-source compiler, graph serializer, basic optimizations and a few other domains within Packem's core are hoisted here. There is a shared issue between both layers especially in our case where the RC happens to take the position of being the mainstream context in Packem's model so Node startup times and V8 side effects are still persistant.
- **Logical Context (LC)** - This section entails most of the logic Packem uses to instantiate and rehydrate the module graph. It is written strictly in Rust and in most cases, performance-critical parts are abstracted into this layer. However, exceptions to this rule do remain especially in the domains of Packem not having support for them in the moment.

## Contextual Precautions

Switching between the LC and RC can cause a performance delay since the FFI bindings yield the effect with an extra overhead causing build times to be a bit higher. This is why:

- Necessary decisions are made before hand in the RC to avoid unnecessary calls between the two contexts.
- A minimal functional interface is exposed to the RC.
- Non-performance-critical parts of Packem are regressed into the RC.

> Note
>
> Mutation of the module graph can occur anywhere between the LC and the RC
