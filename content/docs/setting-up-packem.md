---
id: setting-up-packem
title: Setting Up Packem
permalink: docs/setting-up-packem.html
prev: getting-started.html
next: extended-configurations.html
redirect_from:
  - "docs/setting-up"
  - "docs/setup"
---

This section outlines basic configuration options to get you started. Based off a simple app, you could extend your needs further to fit your requirements.

After installing Packem through the [various methods](/docs/getting-started), setting up Packem will be a matter of adding a single YAML file at the root of your project. Packem needs this configuration file to tell exactly what and how your code should be bundled.

## Why static configuration? Why YAML? {#why-static-configuration-why-yaml}

A static configuration is **enough to declaratively tell Packem what to do** in your project so you have control of how Packem should run and what options to make that best suits your project's needs.

## Creating the configuration file {#creating-the-configuration-file}

In the root of your project's file structure, add a new file and name it `packem.config.yml`. This file will contain all the necessary configuration options for your project. In this file, copy the following content into it and save.

```yaml
root: "./src/index.js"
output: "./dist/bundle.js"
```

As you might've noticed, the `root` field is where the bundling process starts and the `output` field is where your final concatenated bundle ends up. You need to point to a file to get the root and output right. Packem takes care of the rest of the process according to how you've defined it.

That's all you literally need! You have successfully set up a Packem project from scratch. In the next section we'll discuss more on how to use the configuration file to make the impossible happen.
