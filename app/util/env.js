
function require (module) {
  require.__cache = require.__cache || {}

  if (module.__cache_id) return require.__cache[module.__cache_id]

  module.__cache_id = Math.random().toString().slice(2)
  return require.__cache[module.__cache_id] = module()
}

function component (type) {
  return function (attrs, children) {
    var children = Array.prototype.slice.call(arguments)
    var attrs = (typeof children[0] === 'object' && !children[0].$$typeof) ? children.shift() : {}
    return React.createElement(type, attrs, children)
  }
}

'h1,h2,h3,div,p,ul,ol,li,span,a,i,b,del'
.split(',')
.forEach(function (tag) {
  window[tag] = component(tag)
  window[tag]._name = tag
})
