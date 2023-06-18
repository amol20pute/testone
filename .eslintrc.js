module.exports = {
  root: true,
   extends: [ '@react-native-community',"prettier", "prettier/react"],
   rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "React"
      }
    ],
    "react/jsx-uses-vars": "error",
    "semi": ["warn", "always"],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "prettier/prettier": "warn",
    "no-confusing-arrow": "warn",
    "no-unexpected-multiline": "error"
  }
};


