# Minimal Node.js Server Template

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![GitHub Actions CI](https://github.com/mihaur/node-server-template/workflows/Node%20CI/badge.svg)

Simple Node.js server with GitHub Actions build, babel, minimal tooling (nodemon, standard), and mocha tests. Can be used as a template to quickly bootstrap yor Node.js server projects.

## Features

* automatic reloading via [nodemon](https://nodemon.io/)
* linting and fixing via [standard](https://standardjs.com)
* latest ECMAScript2015+ support via [babel 7](https://babeljs.io/)
* tests with [mocha](https://mochajs.org/) and coverage tests by [nyc](https://github.com/istanbuljs/nyc)
* load .env to environment via [dotenv](https://github.com/motdotla/dotenv)
* Continuous integration via [Github Actions CI](https://github.com/features/actions)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [node](https://nodejs.org/en/) with [npm](https://www.npmjs.com/)
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

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

Then you can attach your IDE or Chrome DevTools to a running process by appending WebSocket UUID printed to console to <chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=localhost:9229/> . See [Node.js documentation](https://nodejs.org/en/docs/guides/debugging-getting-started/) for details.

### Linting and code fixing

Linting is done using [standard](https://standardjs.com). Use `npm run lint` to run linter. Linter output is piped trough [snazzy](https://github.com/standard/snazzy) which converts "compact" text from a linter to "stylish". You can also automatically fix linter errors by running `npm run lint:fix`.

### Testing

#### Unit tests
Unit tests are stored in test/**.spec.js and are run by [mocha](https://mochajs.org/). Run `npm run test` to run all tests. 

#### Coverage tests
Run `npm run coverage` to create coverage report with  all tests. Report is generated in coverage/ directory using html formatter, from where it's served using [http-server](https://github.com/http-party/http-server) on [localhost:8080](http://localhost:8080/).
