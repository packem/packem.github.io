---
id: getting-started
title: Getting Started
permalink: docs/getting-started.html
prev: roadmap.html
next: extended-configurations.html
redirect_from:
  - "docs"
  - "docs/setting-up"
  - "docs/setup"
---

This section outlines how to install and configure Packem to get you started. Based off a simple configuration, you could extend your needs further to fit your use-cases.

## Installation

To install Packem, your system needs to meet a few requirements:

- [Node (_v10_, _v9_ or _v8_)](https://nodejs.org/) **must** be installed (with *npm*). If you use [Yarn](https://yarnpkg.com/), then follow along with the appropriate commands.

> Note
>
> Packem binaries are not available for Windows but are expected when *v1.0-stable* lands.

Through your terminal, run:

```bash
# Default installation method (with npm)
npm install -g packem

# For Yarn, run
yarn global add packem
```

It is highly recommended to install Packem globally so that any version update could allow multiple projects using Packem to compile using the latest installed version. You can check more about the versionings [here](https://github.com/packem/packem/blob/master/CHANGELOG.md). Alternatively, you could install it locally then use a package runner like [npx](https://github.com/zkat/npx) to run Packem on your project locally.

After installing Packem, setting up your workspace environment will be a matter of adding a single YAML file at the root of your project. Packem needs this configuration file to tell exactly what and how your code should be bundled.

## Creating the configuration file

In the root of your project's file structure, add a `.packemrc` (YAML) file. This file will contain all the necessary configuration options for your project. In this file, you'll need to define the following fields:

```yaml
input: "./src/index.js"
output: "./dist/bundle.js"
format: "iife"
```

> Note:
>
> Packem v0.1.4 and below require a `packem.config.yml` instead. Using these versions are discouraged since they don't conform with v1.0 APIs as much as v0.2.

The `input` field is where the bundling process starts and the `output` field is where your final concatenated bundle ends up. You need to point to an existing file (no dynamic file creations) to get the input point right. Packem takes care of the rest of the process according to how you've defined it.

> Note
>
> Only the `input` field is necessary. The `output` field defaults to `"./build"` if its not defined.

## Using Packem's CLI to start bundling

From the terminal, run the command `packem` in the root directory of your project. When the bundling process is finish, return back to your project and check the output folder you specified (i.e. `./dist/bundle.js`). If you get lost, run `packem --help` to find more details on more command options.
