module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    "react-native/react-native": true
  },
  extends: [
    "@react-native-community",
    'plugin:@typescript-eslint/recommended',
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "prettier"
  ],
  settings: {
    "import/resolver": {
      typescript: {},
      "babel-plugin-root-import": {
        rootPathSuffix: "app",
        rootPathPrefix: "~"
      },
      node: {
        extensions: [".js", ".jsx", "ts", ".tsx"]
      }
    }
  },
  globals: {
    ios: false,
    android: false,
    windowHeight: false,
    windowWidth: false,
    hairlineWidth: false,
    DeviceInfo: false,
    isIphoneX: false,
    StatusBarHeight: false,
    HeaderHeight: false
  },
  rules: {
    'prettier/prettier': 0,
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "global-require": 0,
    "linebreak-style": [2, "unix"],
    "no-nested-ternary": 0,
    "react-hooks/exhaustive-deps": "off",
    "lines-between-class-members": [
      1,
      "always",
      { exceptAfterSingleLine: true }
    ],
    "prefer-destructuring": [
      2,
      {
        array: false,
        object: true
      }
    ],
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "jsx-a11y/accessible-emoji": 0,
    "react/static-property-placement": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0,
    "react-native/no-inline-styles": 0,
    "react-native/split-platform-components": 0,
    "@typescript-eslint/explicit-member-accessibility": [
      2,
      { accessibility: "no-public" }
    ],
    "@typescript-eslint/no-empty-interface": 1,
    "@typescript-eslint/explicit-function-return-type": [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-use-before-define": [
      2,
      {
        functions: true,
        classes: true,
        variables: false
      }
    ],
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "off",
  }
};