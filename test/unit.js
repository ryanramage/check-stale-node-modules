var warning = require('../lib/index')
var test = require('tape')
var path = require('path')

test('test a dependency does not meet its semver', function (t) {
  var example1 = path.resolve(__dirname, 'example1')

  warning(example1, function (errors) {
    t.equals(errors.length, 1)
    t.equals(errors[0].dependency, 'm2')
    t.equals(errors[0].required, '^1.1.0')
    t.end()
  })
})

test('test a missing dependency', function (t) {
  var example2 = path.resolve(__dirname, 'example2')

  warning(example2, function (errors) {
    t.equals(errors.length, 1)
    console.log(errors)
    t.equals(errors[0].dependency, 'm3')
    t.equals(errors[0].missing, true)
    t.end()
  })
})
