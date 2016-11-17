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
