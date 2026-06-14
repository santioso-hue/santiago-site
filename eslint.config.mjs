import next from "eslint-config-next";

// eslint-config-next (v16+) ships a native ESLint flat-config array, so it composes
// directly — no FlatCompat shim needed. It bundles the Next core-web-vitals,
// TypeScript, React, react-hooks, import, and jsx-a11y rule sets.
const eslintConfig = [
  ...next,
  {
    ignores: [".next/**", "out/**", "node_modules/**"],
  },
];

export default eslintConfig;
