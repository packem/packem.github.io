---
id: extended-configurations
title: Extended Configurations
permalink: docs/extended-configurations.html
prev: setting-up-packem.html
next: output-formats.html
redirect_from:
  - "docs/configuration"
  - "docs/configurations"
  - "docs/config"
  - "docs/extend-config"
---

This section entails the necessary details required to use Packem's configuration system efficiently.

## Using custom Babel presets and/or plugins with Packem's transformer

Module bundling is not only confined to string concatenation so allowing tools like [Babel](https://babeljs.io/) to transform your code is necessary.

Create a new field relative to the `input` and `output` fields called `transformer`. Under this field, add a `babelPresets` and/or a `babelPlugins` field(s). Both fields accept an array of strings that indicate which Babel presets and/or plugins should be used during transformation respectively.

By default, Packem includes `@babel/core` so you don't need to install it. The configuration psuedocode below shows how to add `@babel/preset-env` and `@babel/plugin-syntax-dynamic-import` to your code.

```yaml
root: ./src/my-root.js
output: ./dist/

# Here's where you configure Babel to your needs.
transformer:
  babelPresets: ["@babel/preset-env"]
  babelPlugins: ["@babel/plugin-syntax-dynamic-import"]
```

> __Note__
> - You must manually install your presets and/or plugins with a package manager.
> - Packem doesn't take __ANY__ externally defined Babel configurations as in `package.json`, `.babelrc` or `babel.config.js`. You must define your presets and/or plugins under the `transformer` field.

## Including/excluding globs from transformation

Use the `include` and/or `exclude` fields under `transformer` to include and/or exclude globs of files from being transformed respectively. Since `node_modules` is usually expected to be transformed, it is clear cut that it is moreso unnecessary to allow `node_modules` being transformed. There might be specific reasons as to why you would need to bundle with `node_modules` especially in the case where building for the browser is necessary and a certain library exports unbundled code like JSX. Both `include` and `exclude` accept a glob as a value.

For example, to exclude `node_modules` and include every JavaScript file under `src` recursively,

```yaml
root: ./src/my-root.js
output: ./dist/

transformer:
  # The double stars makes it match deeper (exhaustively)
  # into sub folders. A glob is recursive so a list of
  # matches is returned from this glob.
  include: src/**/*.js
  exclude: node_modules
```

## Resources

- [Glob pattern matching, Wikipedia.](https://en.wikipedia.org/wiki/Glob_(programming))
