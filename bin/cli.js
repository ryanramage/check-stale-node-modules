#!/usr/bin/env node
var check = require('../lib/')
var path = require('path')

var projectDir = path.resolve(process.argv[2])

check(projectDir, function (err) {
  if (err) console.log(err)
})
