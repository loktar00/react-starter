Setting up React-Starter
===

Install node packages

`npm install`

Install webpack globally if you don't already have it

`npm install -g webpack`

Once installed there are three possible tasks to run

* `npm run dev` - builds the files via webpack and just runs a watcher on the files.

* `npm run dev-server` - Runs everything through the webpack dev server. Server is on http://127.0.0.1:8080/webpack-dev-server/. Note this does not actually build the files.

* `npm run build` - Builds the entire project does not run a watcher. This is the task that should be run before deploying as it builds all the files needed for the actual application.

Component Structure
==

Components used in more than one area should reside in `components/common`. Components with a more coupled nature live within their parent components directory.


Less Structure
==

Every component that needs styling has a less file associated inside of the `/less` directory. The directory structure for components mirrors the `components` directory.

When adding a new component less file you must create a reference for the file in `/less/components.less`.

Common colors are in `variables.less` and common styles for major components are in associated less files.

In terms of naming convention there isn't one being used.
