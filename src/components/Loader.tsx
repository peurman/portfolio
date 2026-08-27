import ReactLoaders from 'react-loaders'

/*
 * react-loaders ships an old UMD bundle. Depending on the bundler's CommonJS
 * interop the default import can resolve to the namespace, to the inner
 * `module.exports` object, or (correctly) to the component. The `Loader`
 * property holds the component in every one of those shapes, so prefer it and
 * fall back defensively.
 */
const mod = ReactLoaders as unknown as {
  Loader?: typeof ReactLoaders
  default?: { Loader?: typeof ReactLoaders } & typeof ReactLoaders
}

const Loader = (
  typeof ReactLoaders === 'function'
    ? ReactLoaders
    : (mod.Loader ?? mod.default?.Loader ?? mod.default ?? ReactLoaders)
) as typeof ReactLoaders

export default Loader
