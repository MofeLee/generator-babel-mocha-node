# generator-babel-mocha-node [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator to author node packages written in ES2015+

## Installation

First, install [Yeoman](http://yeoman.io) and generator-babel-mocha-node using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-babel-mocha-node
```

Then generate your new project:

```bash
yo babel-mocha-node <appname>
```

After that you have a ready to run project that can:

1. be written purely in [ES2015](https://babeljs.io) + all [stage 3](http://babeljs.io/docs/plugins/preset-stage-3/)
features. Your project is **still** compatible with [npm](https://www.npmjs.com).
Every time you make a `npm publish` all your source code will be transpiled to
ES5 and only that code will be published.
1. write unit tests in [Mocha](http://mochajs.org) and [Chai](http://chaijs.com)
assertions.
1. lint your code with [ESLint](http://eslint.org).

Have a look at the `package.json` for all available [npm scripts](https://docs.npmjs.com/misc/scripts).

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT


[npm-image]: https://badge.fury.io/js/generator-babel-mocha-node.svg
[npm-url]: https://npmjs.org/package/generator-babel-mocha-node
[travis-image]: https://travis-ci.org/screendriver/generator-babel-mocha-node.svg?branch=master
[travis-url]: https://travis-ci.org/screendriver/generator-babel-mocha-node
[daviddm-image]: https://david-dm.org/screendriver/generator-babel-mocha-node.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/screendriver/generator-babel-mocha-node
