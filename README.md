# Inferno Component

This is a to create a standalone Inferno component.

### Getting Started

```
git clone --depth 1 https://github.com/abradley2/inferno-component && \
rm -rf ./inferno-component/.git && \
cd ./inferno-component && \
git init && \
npm install && \
npm run watch
```

### Development

Just execute `npm run watch` to start the simple development server with live-reload on
by default.

The component is located in **component.js**. Component's should be stateless and
only run off props. The prototyping harness is in **main.js**. You can edit the
props that are passed to your component, and call `update()` to when that component
would receive new props.

### Publishing

Once you're done, do `npm run build` and publish your component to npm!
Yay! Sharing!
