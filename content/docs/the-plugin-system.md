---
id: plugin-system
title: Plugin System
permalink: docs/plugin-system.html
prev: setting-up-packem.html
next: common-plugins.html
redirect_from:
  - "docs/plugin"
  - "docs/plugins"
---

This section outlines the various things needed to get you started with writing efficient Packem plugins. You **must** go through this section well enough to be able to build a Packem plugin. The examples are in TypeScript just so to keep an extra hand at the proper types of a variadic. If there are any issues or problems with this system, please file an issue or submit a PR.

Packem plugins are in-memory classes that are sequentially executed during build time. An instantiated plugin does absolutely nothing to the bundle cycle so therefore **event hooks** are needed to allow such manipulations.

## The `PackemPlugin` class

The `PackemPlugin` class is an abstract class that stands as a container for newly created plugins. Plugins need to extend `PackemPlugin` to be able to use the event hooks.

As an example plugin, let's create a plugin that logs '🐶' to the console everytime a JavaScript file is added to the module graph. Let's start off with creating a class `PuppyPlugin`.

```javascript
const { PackemPlugin } = require("packem");

// This does nothing! 😭
class PuppyPlugin extends PackemPlugin {}

module.exports = PuppyPlugin;
```

## Using Event Hooks to manipulate the bundle cycle

To put more sense into our plugin, we'll need an event that _allows us to check if a JavaScript module is added to the module graph_. The event `onModuleBundle` does exactly that. Event hooks are defined as class methods that might or might not take any arguments depending on the event type. In this case, `onModuleBundle` takes the _module interface_ (more on this later) which allows us to read or write to the module graph.

```javascript
const { PackemPlugin } = require("packem");

// This does nothing!
class PuppyPlugin extends PackemPlugin {
  onModuleBundle(mod) {
    if (mod.extension == "js") {
      console.log("You bet I have a cute 🐶!");
    }
  }
}

module.exports = PuppyPlugin;
```

## Adding a plugin to `.packemrc`

One last step to avail your plugin to a project is adding it to the configuration file. In the `.packemrc`, add the following then run the command `packem` in the terminal:

```yml
root: ./src/index.js
output: ./dist
plugins:
  packem-puppy-plugin: on
```

Depending on the number of JavaScript files in your project, you should've ended up with some logs in your terminal (`"You bet I have a cute 🐶!"`). Try adding more JavaScript files, rerun `packem` and see what happens.
