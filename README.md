# express-route-easy

[![NPM Version][npm-image]][npm-url]
[![Github License][license-image]](LICENSE)
[![NPM Downloads][downloads-image]][npm-url]

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm i express-route-easy
```

## Examples

### Using with

### Using with `express`

```js
const express = require('express')
const app = express()

const easy = require('express-route-easy')

exports.import = ['/import', async (req, res, next) => {
  res.send({go: 'the force awakens'})
}]

exports.export = ['/export', async (req, res, next) => {
  res.send({go2: 'the force awakens'})
}]

exports.routes = easy([], exports)

app.use('/v1', exports.routes)
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/php-fpm.svg
[license-image]: https://img.shields.io/github/license/ivanslf/node-php-fpm.svg
[downloads-image]: https://img.shields.io/npm/dm/php-fpm.svg
[npm-url]: https://npmjs.org/package/php-fpm
