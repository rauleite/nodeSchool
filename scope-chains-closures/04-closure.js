function foo () {
  var bar
  quux = 'value'
  function zip () {
    var quux = 'another value'
    bar = true
  }
  return zip
}
