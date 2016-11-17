
function List () {
  var cls = require(ListStyles)
  var merge = require(Util).merge

  return component(React.createClass({
    getInitialState: function () { return {
      striked: {}
    }},

    toggle: function (item) {
      var striked = merge({}, this.state.striked)
      striked[item] = !striked[item]
      this.setState({striked: striked})
    },

    render: function () { return (
      ul({styles: cls.root},
        this.props.stack.map(function(item) {
          var props = {
            style: cls.item,
            onClick: this.toggle.bind(this, item)
          }
          return li(props, this.state.striked[item] ? del(item) : item)
        }, this)
      )
    )}
  }))
}
function ListStyles () { return {
  root: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  item: {
    margin: '0 0 10px',
    padding: 0,
    cursor: 'pointer'
  }
}}

function App () {

  var list = List()
  var cls = AppStyles()
  var merge = Util().merge

  return component(function () { return (
    div({style: cls.root},
      h1('Hello?'),
      p(
        'Was this really rendered? ',
        b('really???')
      ),
      div({style: merge(cls.headline, cls.colored)},
        'Welcome to React app built with'
      ),
      list({stack: ['React', 'JSX', 'CSS', 'Webpack']})
    )
  )})
}
function AppStyles () { return {
  root: {
    fontFamily: 'sans-serif'
  },
  headline: {
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  colored: {
    color: '#070'
  }
}}

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
function Util () {

  function merge () {
    if (Object.assign) return Object.assign.apply(Object, arguments)
    return Array.prototype.slice.call(arguments, 0)
      .reduce(function (res, obj) {
        obj = obj || {}
        for (var k in obj) { if (obj.hasOwnProperty(k)) res[k] = obj[k] }
        return res
      }, {})
  }

  return {
    merge: merge
  }
}
