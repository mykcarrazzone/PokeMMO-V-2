module.exports = {
  // ... autres options de configuration ...
  snapshotResolver: "<rootDir>/custom-resolver.js",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
  },

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  globals: {
    "js-jest": {
      jsconfig: "<rootDir>/jsconfig.jest.json",
    },
    NODE_ENV: "test",
  },
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/*.d.js",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
    "!**/jest.config.js",
    "!**/next.config.js",
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|lib|styles)[/\\\\]"],
  // Add this line to use next-page-tester:
  testEnvironment: "node",
};
