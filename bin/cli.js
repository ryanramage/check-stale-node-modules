#!/usr/bin/env node
var check = require('../lib/')
var path = require('path')
var config = require('rc')('npm-install-warning', {
  fail: true
})
var specifiedDir = process.argv[2] || process.cwd()
var projectDir = path.resolve(specifiedDir)

check(projectDir, function (errors) {
  if (!errors || !errors.length) return

  errors.forEach(function (err) {
    var msg = 'is missing'
    if (err.required) {
      msg = 'does not satisfy ' + err.required
    }
    console.warn('dependency', err.dependency, msg)
  })
  console.warn('run `npm install`')
  if (config.fail) process.exit(1)
})
