# Node.js API server based on express project template

[![js-standard-style][standard-image]][standard-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
![GitHub Actions CI][github-action-nodejs-ci-url]
[![Coverage Status][coveralls-badge-url]][coveralls-repo-url]

Node.js API server/backend build with [Express.js][expressjs-url], GitHub Actions build, babel, minimal tooling (nodemon, standard), and mocha tests. Can be used as a template to quickly bootstrap yor Node.js server projects.

## All features

* automatic reloading using [nodemon][nodemon-url]
* linting and fixing using [standard][standard-url]
* git pre-commit hooks using [husky][husky-url] and [lint-staged][lint-staged-url]
* latest ECMAScript2015+ support using [babel 7][babel-url]
* unit and integration tests using [mocha][mocha-url]
* coverage tests using [nyc][nyc-url]
* code coverage tracking using [coveralls][coveralls-url]
* load .env to environment using [dotenv][dotenv-url]
* continuous integration using [GitHub Actions CI][github-actions-url]
* code documentation using JSDoc [JSDoc][jsdoc-url] 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js][node-url] with [npm][npm-url]
* [git][git-book-url]

### Installing

* `git clone git@github.com:mihaur/node-server-template.git`
* `cd cd node-server-template`
* `cp .env.sample .env`
* `npm install`
* `npm start`

### Configuring

Use .env to store your environment dependant configuration options and secrets. This file should not be checked in to your repository, use .env.sample as example but exclude real secrets.

### Building

To run the build use `npm run build`. Build artifacts along source maps are stored in dist folder.

### Debugging built code

To debug build code run `npm run debug`. 

Then you can attach your IDE or Chrome DevTools to a running process by appending WebSocket UUID printed to console to <chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=localhost:9229/> . See [Node.js documentation][node-doc-url] for details.

### Linting and code fixing

Linting is done using [standard][standard-url]. Use `npm run lint` to run linter. Linter output is piped trough [snazzy][snazzy-url] which converts "compact" text from a linter to "stylish". You can also automatically fix linter errors by running `npm run lint:fix`.

### Testing

Tests can be run by [mocha][mocha-url]. Run `npm run test` to run both unit and integration tests. 

#### Unit tests
Unit tests are stored in src/**.spec.js.

#### Integration tests
Integration tests are stored in test/**.spec.js.

#### Coverage tests
Run `npm run coverage:lcov` to generate test lcov coverage report. Both unit and integration tests are run. Report is generated in coverage/ directory using HTML and lcov formatters. Use `npx serve coverage` to serve generated HTML.

### Documentation

Run `npm run doc` to create HTML documentation from JSDoc annotations. Documentation is stored in doc/ directory. Use `npx serve coverage` to serve generated documentation.

[babel-url]: https://babeljs.io/
[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[coveralls-url]: https://coveralls.io/
[coveralls-repo-url]: https://coveralls.io/github/mihaur/node-server-template?branch=master
[coveralls-badge-url]: https://coveralls.io/repos/github/mihaur/node-server-template/badge.svg?branch=master
[dotenv-url]: https://github.com/motdotla/dotenv
[expressjs-url]: https://expressjs.com/
[git-book-url]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[github-action-nodejs-ci-url]: https://github.com/mihaur/node-server-template/workflows/Node.JS%20CI/badge.svg
[github-actions-url]: https://github.com/features/actions
[greenkeeper-image]: https://badges.greenkeeper.io/mihaur/node-server-template.svg
[greenkeeper-url]: https://greenkeeper.io/
[jsdoc-url]: https://devdocs.io/
[mocha-url]: https://mochajs.org/
[node-doc-url]: https://nodejs.org/en/docs/guides/debugging-getting-started/
[node-url]: https://nodejs.org/en/
[nodemon-url]: https://nodemon.io/
[npm-url]: https://www.npmjs.com/
[nyc-url]: https://github.com/istanbuljs/nyc
[snazzy-url]: https://github.com/standard/snazzy
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[husky-url]: https://github.com/typicode/husky
[lint-staged-url]: https://github.com/okonet/lint-staged
