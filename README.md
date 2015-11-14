# npm-install-warning

Generate a warning when your node_modules does not match your package.json

There a lot of times when you `git pull` and you forget to `npm i`
This package will generate a warning if you need to npm i.

```
npm install npm-install-warning
```

## Usage

``` js
var npmwarn = require('npm-install-warning')
npmwarn(projectDir)

```

## CLI

```
npm install npm-install-warning -g
npm-install-warning
```


## License

MIT
