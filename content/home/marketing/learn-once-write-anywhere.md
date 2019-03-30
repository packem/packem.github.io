---
title: Adaptable Plugin System
order: 2
---

The class-based event model is quite common and Packem uses it to expose built-in events to plugins. The `PackemEventDispatcher` can be used to dispatch custom events synchronously which is then exposed to other plugins.

This pattern is used heavily in the `packem-dev-plugin` which serves as a development plugin.
