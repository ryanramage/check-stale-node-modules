var semver = require('semver')
var rpt = require('read-package-tree')

module.exports = function (projectDir, cb) {
  var pkg = require(projectDir + '/package.json')

  rpt(projectDir, function (node, kidname) {
    return true
  }, function (err, data) {
    if (err) return cb(err)

    var installed_depends = {}
    data.children.forEach(function (dep) {
      installed_depends[dep.package.name] = dep.package.version
    })

    // // check that they match
    if (!pkg.dependencies) return cb()

    var errors = []

    Object.keys(pkg.dependencies).forEach(function (dep) {
      var requiredVersion = pkg.dependencies[dep]
      if (!installed_depends[dep]) errors.push({
        dependency: dep,
        missing: true
      })
      if (!semver.satisfies(installed_depends[dep], requiredVersion)) {
        errors.push({
          dependency:dep,
          required: requiredVersion
        })
      }
    })
    return cb(errors)
  })
}
