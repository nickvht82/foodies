module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    testEnvironment: "jsdom", // Needed for DOM-related testing (e.g. React)
    transformIgnorePatterns: [
      "/node_modules/(?!(render)/)", // You can customize the ignored package
    ],
  };