# packem.github.io

This repo hosts Packem's site.

## Deploy steps

### Pushing to `dev` branch

Run `git push -f --set-upstream origin dev` in the `dev` branch to push remote refs up. To checkout the `dev` branch, run `git checkout -b dev`.

### Deploying

GitHub Pages needs to push public content to the `master` branch that's why a seperate branch is used for pushing non-static files. Finally, run the following command (available in the `package.json`) in the `dev` branch:

```bash
# Shorthand
$ npm run deploy

# Longer version
$ gatsby build && gh-pages -d public -b master
```
