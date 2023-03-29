module.exports = {
  // ... other config options ...
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
    NODE_ENV: "test",
  },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
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
