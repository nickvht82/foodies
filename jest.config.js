module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    testEnvironment: "jsdom", // Needed for DOM-related testing (e.g. React)
  };