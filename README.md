# Autowork

🤖 Automate ["It is as if you were doing work"](https://pippinbarr.github.io/itisasifyouweredoingwork/)

## Building the snippet

```
# Install npm packages
npm install

# Build the snippet (available at dist/snippet.js)
npm run build
```

## Using the snippet

```
# Copy snippet to the clipboard, then paste it into the console
cat dist/snippet.js | pbcopy
```

Run `window.autowork.addListeners` to start automating work.

Run `window.autowork.removeListeners` to stop automating work.

Run `window.autowork.killDialogs` to clear the screen.

## Why Webpack?

I want to be able to include libraries if necessary. Webpack is a straightforward way to do this. 

Note: We are assuming we are running in the "It is as if you were doing work" environment. This means we assume jQuery and jQuery UI are present.

I also want to minimize the build size. For this reason, I'm using $.datepicker to parse dates, rather than something like moment.

## Development

```
# Run tests
npm test
```
