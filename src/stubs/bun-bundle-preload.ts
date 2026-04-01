import { plugin } from 'bun'

// Enabled features - must be kept in sync with bun-bundle-runtime.ts
const ENABLED_FEATURES = new Set<string>([
  'BUDDY',               // Companion sprite
])

plugin({
  name: 'bun-bundle-polyfill',
  setup(build) {
    const filter = /^bun:bundle$|^bundle$/
    build.onResolve({ filter }, () => ({
      path: 'bun-bundle-polyfill',
      namespace: 'bun-bundle-ns',
    }))
    build.onLoad({ filter: /.*/, namespace: 'bun-bundle-ns' }, () => ({
      contents: `const ENABLED_FEATURES = new Set(${JSON.stringify([...ENABLED_FEATURES])});\nexport function feature(name) { return ENABLED_FEATURES.has(name) }`,
      loader: 'js',
    }))
  },
})
