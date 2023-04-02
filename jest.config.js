module.exports = {
  verbose: true,

  clearMocks: true,
  collectCoverage: true,

  setupFilesAfterEnv: ['./config/jest.setup.ts'],

  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],

  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },

  testEnvironment: 'jsdom',
  // testEnvironment: 'node',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  moduleNameMapper: {
    // import styles
    '\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    // import assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
