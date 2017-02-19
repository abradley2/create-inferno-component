# Create Inferno Component

This is a simple way to create reusable Inferno components.

### Getting Started

```
git clone --depth 1 https://github.com/abradley2/create-inferno-component
mv create-inferno-component my-component-name
cd my-component-name
rm -rf .git
git init
npm install
npm run watch
```

### Development

Just execute `npm run watch` to start the simple development server with live-reload on
by default.

The component is located in **component.js**. Components should be stateless and
not modify their own props. The prototyping harness is in **main.js**. You can edit the
props that are passed to your component, and call `update()` when that component
would receive new props.

### Publishing

`npm run build` will output that completed component to **dist/component.js**.
**inferno** and **inferno-create-element** are not included in the output
(they are peerDependencies). The only thing added is a very small script to inject the
component's css into the document via **inject-css**. The tagged `css` and `html`
template strings are pre-compiled by **sheetify** and **hyperxify** respectively
for performance and to minimize the bundle size.

When finished, just add some details to your package.json about the project, update the README,
and publish it to NPM!
