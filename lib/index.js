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
    Object.keys(pkg.dependencies).map(function (dep) {
      var requiredVersion = pkg.dependencies[dep]
      if (!installed_depends[dep]) return cb('dependency ' + dep + ' is missing')
      if (!semver.satisfies(installed_depends[dep], requiredVersion)) return cb('dependency ' + dep + ' does not satisfiy: ' + requiredVersion)
    })
  })
}
