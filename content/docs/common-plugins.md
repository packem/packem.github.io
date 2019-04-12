---
id: common-plugins
title: Common Plugins
permalink: docs/common-plugins.html
prev: setting-up-packem.html
next: advanced-plugin-apis.html
redirect_from:
  - "docs/common-plugin"
---

These are a set of plugins created to support basic development utilities, extended configurations, styling with SASS/SCSS, stats on output bundles, etc. They are hosted on [a repo](https://github.com/packem/packem-plugins) on the packem github org. To install a common plugin, run:

```bash
# Where `<name>` is the plugin name
npm install @packem/<name>-plugin --save-dev

# or with Yarn,
yarn add --dev @packem/<name>-plugin
```

## `@packem/file-plugin`

The file plugin allows processing of raw file types as JavaScript modules during runtime. For instance this would return a valid JavaScript object:

```javascript
import tomlConfig from "./path/to/your/file.toml";

console.log(tomlConfig);
```

Currently, raw file processing is done only for the following extensions:

`glsl`, `hlsl`, `cg`, `tesc`, `tese`, `geom`, `comp`, `vert`, `frag`, `vsh`, `fsh`, `log`, `cnf`, `conf`, `cfg`, `temp`, `tmp`, `sql`, `sqlite`, `svg`, `patch`, `0`, `md`, `asc`, `txt`, `csv`, `json`, `ini`, `yaml`, `toml`, `xml`, `rss`, `atom`, `jpg`, `jpeg`, `png`, `gif`, `webp`, `bmp`.

### Usage

Add `file-plugin: on` to the `plugins` section in `packem.config.yml`.

## `@packem/dev-plugin`

Out of the box, Packem doesn't come with a server nor does it include plugins. This plugin brings common developer tools like an HTTP server and a file watcher for development purposes.

### Usage

There are several options available for this plugin. Let's explore some:

```yaml
root: ./src/index.js
output: ./public/build/bundle.js

plugins:
  dev-plugin:
    # Default template to use.
    htmlTemplate: ./public/index.html
    # Port to serve on during development. If it is busy, another
    # port will be used until the right one.
    devServerPort: 3000
    # If true, it enables watch mode. The transformer's `include` and
    # `exclude` fields are used to define what is included/excluded from
    # watch. With this plugin enabled, whatever is transformed is watched.
    watchFiles: true
    # Allow an overlay to appear in case a Packem internal error or
    # Babel error occurs. Defaults to `true`.
    clientSideLogs: true
```

> Note
>
> Do not place HTML files in the same folder as the output bundle's directory. For instance if your config outputs to `./dist/bundle.js` do not place HTML files in `./dist/`.

## `@packem/style-plugin`

Allows all-in-one styling with PostCSS, SASS/SCSS and LESS.

> **Note**: Currently, SASS/SCSS is supported only.

### Usage

There are several options available for this plugin. Let's explore some:

```yaml
plugins:
  sass:
    # All the options below can be found here:
    # https://github.com/sass/node-sass#options
    # Don't use options that write to files since
    # this plugin already handles writing to files.
    outputStyle: compressed
    sourceMap: true
```

## `@packem/minify-plugin`

Uses [terserjs](https://github.com/terser-js/terser) to crunch and optimize your JavaScript into tiny obfuscated files and write it to the output path.

### Usage

There are several options available for this plugin. Let's explore some:

```yaml
plugins:
  minify-plugin:
    # Name of the file to output the minified JavaScript to.
    outputFilename: my-bundle.min.js
    # All the options below can be found under this section:
    # https://github.com/terser-js/terser#api-reference
    #
    # - All options you find in the link above must be under
    #   this field i.e. `terserOptions`.
    # - Don't use options that write to files since
    #   this plugin already handles writing to files.
    terserOptions:
      sourceMap: true
      output:
        beautify: true
```

> Note
>
> This plugin currently minifies the main output bundle only. This means code splitted modules are not minified.

## `@packem/image-plugin`

Uses ImageMin to optimize PNG, JPG/JPEG, GIF, WebP and SVG image formats.

### Usage

There are several options available for `image-plugin`. Let's explore some:

```yaml
plugins:
  image-plugin:
    # Directory to extract images to relative to the output path.
    # This field is required. Default is `./img`.
    extractAssetsDirectory: ./img
    # All the options below can be found under this section:
    # - PNG: https://github.com/imagemin/imagemin-pngquant#api
    # - JPG & JPEG: https://github.com/imagemin/imagemin-jpegtran#api
    # - WebP: https://github.com/imagemin/imagemin-webp#api
    # - GIF: https://github.com/jihchi/imagemin-giflossy#api
    # - SVG: https://github.com/imagemin/imagemin-svgo#api
    #
    # - All options you find in the link above must be under this field
    #   i.e. `imageminOptions`. This is because other fields like
    #  `extractAssetsDirectory` are reserved for the plugin's use case.
    # - Don't use options that write to files since
    #   this plugin already handles writing to files.
    imageminOptions:
      png:
        quality: [0.3, 0.5]
      # JPG & JPEG are treated the same.
      jpg:
        quality: [0.3, 0.5]
      jpeg:
        quality: [0.3, 0.5]
      webp:
        quality: [0.3, 0.5]
      gif:
        quality: [0.3, 0.5]
      svg:
        quality: [0.3, 0.5]
```

> Note
>
> You don't need to specify all of these options. That's why they're options.

## `@packem/bundle-stats-plugin`

Compares a custom predefined constraint/limit on the bundle size to the actual size then reports a tabular diagnostic message. It does so by walking through the `outputDir` of the project and collecting stats.

### Usage

```yaml
plugins:
  bundle-stats-plugin:
    # Takes a file's basename extension and registers a new constraint
    # to be matched against. A basename extension is the last substring
    # of a filename without the leading period (.) e.g.
    # - `bundle.js` would be `js`
    # - `vendor.main.min.js` would be `"main.min.js"`
    # - `main.xyz.png` would be `"xyz.png"`
    #
    # It is measured in kilobytes so `5` would be 5 kilobytes.
    maxAssetSizeLimit:
      # This example checks if any JavaScript file is greater than 2kb.
      js: 2
      # Checks if any file that ends with `min.js` is greater than 4kb.
      "min.js": 4
```
> Note
>
> If you're matching a file type that contains a character sequence that doesn't fit as a proper YAML property value, wrap it in a string like "min.js" and "lib.min.css"

## `@packem/markdown-plugin`

Processes a Markdown module and returns an escaped HTML string in the output.

### Usage

```yaml
plugins:
  # All the options below can be found under this section:
  # https://github.com/showdownjs/showdown#valid-options
  #
  # - Don't use options that write to files since
  #   this plugin already handles writing to files.
  markdown-plugin:
    tables: true
    ghCompatibleHeaderId: true
    rawPrefixHeaderId: true
```

## `@packem/coffeescript-plugin`

Transforms a CoffeeScript module and concatenates a string of JavaScript to the output.

### Usage

No options are available for this plugin.

```yaml
plugins:
  markdown-plugin: on
```

> Note
>
> Imports/requires are not _resolveable_ so this plugin remains super buggy. If you wish to contribute, welcome.

## Resources

- [Advanced Plugin APIs.](/docs/advanced-plugin-apis)
- [Markdown's XSS Vulnerability (and how to mitigate it)](<https://github.com/showdownjs/showdown/wiki/Markdown's-XSS-Vulnerability-(and-how-to-mitigate-it)>) by [ShowdownJS.](https://github.com/showdownjs/showdown)
- [Use Imagemin to compress images.](https://web.dev/fast/use-imagemin-to-compress-images)
