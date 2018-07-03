const express = require('express')
module.exports = (accepts, exportsObject, expressRouter = express.Router()) => {

  const router = global.express ? global.express.Router() : expressRouter
  const routerGen = (url, method, callback) => router[method](url, callback)

  for (const accept of accepts) {
    if (typeof accept === 'string') {
      router.get(accept, exportsObject[accept.name])
    } else {
      routerGen(accept.url, accept.method, exportsObject[accept.name])
    }
  }

  const dynamicsRoutes = Object.keys(exportsObject).filter((key) => Array.isArray(exportsObject[key]))
  if (dynamicsRoutes.length) {
    for (const dynamicKey of dynamicsRoutes) {
      const dynamicRoute = exportsObject[dynamicKey]
      const dynamicItemsLength = dynamicRoute.length
      const url = dynamicRoute[0]
      if (typeof dynamicRoute[1] === 'object' && !Array.isArray(dynamicRoute[1])) {
        var options = dynamicRoute[1]
      } else if (typeof dynamicRoute[1] === 'string') {
        var options = {method: dynamicRoute[1]}
      } else {
        var options = {method: 'get'}
      }
      const callback = dynamicRoute[dynamicItemsLength - 1]

      routerGen(url, options.method, callback)
    }
  }

  return router
}
