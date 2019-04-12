---
title: Safe Binaries
order: 1
---

Built-in OS-specific binaries are utilized as safe C++ node addons in Packem's core. This creates a non-breaking environment for Packem to bundle properly. Plugins, features and optimizers can safely import low-level APIs to allow __close-to-the-metal__ integration with the platform.

This gives the advantage point of using Rust's OS threads.
