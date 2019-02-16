# Getting Started

Packem is a partially-compiled JavaScript module bundler written in [Rust](https://www.rust-lang.org/), a systems programming language with focus on type-safety, fearless concurrency and a powerful threading model.

> Note
>
> If you are new to Packem, you can follow along with this section (for beginners). If you want to use Packem right away, [check the installation and setup instructions](/docs/installation-setup). For advanced users, check out the [advanced section](/) for nitty-gritty details on how to hack with Packem.

Packem is a _blazing-fast general-purpose asset bundler_ that generates production-ready static assets out of your apps. It generates a graph of module dependencies, transforms them concurrently and then serializes it all together into a final output. Portable binaries consume your dependencies and then generate a flat `ModuleGraph`. Depending on how big the module graph is and how many physical cores are available on your machine, it is algorithmically split into multiple segments that get transformed in parallel in a `WorkerPool`, significantly reducing bundling time. The transformed modules then get serialized into a meaningful bundle.

## Short History

Packem started out as an idea that there could be a way to make module bundling in JavaScript a whole lot easier since JavaScript (on [Node](https://nodejs.org/)) seems to be tedious with the single threaded nature. It only made sense to use [Rust](https://www.rust-lang.org/), a language developed and maintained by [Mozilla]() that deals with low-level systems.

[Rust](https://www.rust-lang.org/) proved to be very useful with its amazing performance, zero-cost abstractions, rich type system and unique ownership model. From this, we can take that Packem's prioritizes performance over expression. Without any optimizations, concurrency leverages and/or features, Packem was able to defeat all modern bundlers in performance-related aspects such as bundling time, DevServer startup time etc.

Another 'threat' to modern bundlers is the notorious [Babel](https://babeljs.io/) which just remains as unchanged as it always was (considering other bundlers as well). While Babel is able to produce efficient bundles for Node, the Web and other environments, it is horribly slow at transforming the simplest of code. In the eyes of Packem, this is completely unacceptable. This led us to abstract certain parts of Babel and let Rust do the heavy-lifting which we then postulated into a seperate sub-project of Packem, *Compilem*.

> Note
>
> Compilem is quite off the topic as far as this section is concerned. You can [find more about it](/docs/advanced-guide/compilem) in the advanced section.
