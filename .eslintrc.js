module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    jest: true, // Assuming you use Jest for testing
  },
  ignorePatterns: ["src/generated/**/*", "dist/**/*", "node_modules/**/*"], // Ignore generated code, build output, and node_modules
  rules: {
    // Add any project-specific rules here
    // Example: disable a rule
    // '@typescript-eslint/no-explicit-any': 'off',
  },
}; 