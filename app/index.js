
function App () {

  var list = require(List)
  var cls = require(AppStyles)
  var merge = require(Util).merge

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
