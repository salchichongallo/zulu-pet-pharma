/**
 * Build an object whose keys are the basename of the module.
 * @param {*} contextRequire
 * @see https://webpack.js.org/guides/dependency-management/#context-module-api
 */
function importAll(contextRequire) {
  return contextRequire.keys().reduce((previous, key) => {
    const name = key.split(/\/(.+)\./)[1]
    return {
      ...previous,
      [name]: contextRequire(key).default,
    }
  }, {})
}

let petsUrlsByName = {}
if (process.env.NODE_ENV !== 'test') {
  petsUrlsByName = importAll(require.context('./img/', false, /\.png$/))
}

export function getImgUrl(petName) {
  return petsUrlsByName[petName]
}
