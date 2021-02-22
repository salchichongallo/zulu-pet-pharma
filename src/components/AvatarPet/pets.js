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

export const petsUrlsByName = importAll(
  require.context('./img/', false, /\.png$/)
)
