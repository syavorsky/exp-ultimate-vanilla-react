
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
