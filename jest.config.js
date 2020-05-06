const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.tsx",
    "<rootDir>/src/navigation/*.tsx",
    "<rootDir>/src/routes/*.tsx",
    "!<rootDir>/src/hooks/**",
  ],
  coverageDirectory: './coverage',
  snapshotSerializers: ['@emotion/jest'],
  testEnvironment: 'jsdom',
};
