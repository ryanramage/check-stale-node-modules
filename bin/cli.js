#!/usr/bin/env node
var check = require('../lib/')
var path = require('path')

var projectDir = path.resolve(process.argv[2])

check(projectDir, function (errors) {
  if (!errors || !errors.length) return;

  errors.forEach(function (err) {
    var msg = 'is missing'
    if (err.required) {
      msg = 'does not satisfy ' + err.required
    }
    console.warn('dependency', err.dependency, msg)
  })
  console.warn('Solution: run `npm install`')
})
