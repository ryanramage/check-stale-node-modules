# check-stale-node-modules

Generate a warning when your node_modules does not match your package.json

There a lot of times when you `git pull` and you forget to `npm i`
This package will generate a warning if you need to npm i.

This tests for both missing dependencies, and dependencies that no longer satisfy the semver specified in package.json

```
npm install check-stale-node-modules
```

## Usage

``` js
var check = require('check-stale-node-modules')
check(projectDir, function (errors) {
  if (errors.length) console.log('You have stale node_modules, npm install')
})

```

## CLI

```
npm install check-stale-node-modules -g
```

and then in your project directory, run

```
> check-stale-node-modules
dependency semver does not satisfy ^50.0.3
run `npm install`
```


## License

MIT
