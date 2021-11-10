module.exports = {
  '*.{js,ts,tsx}': ['eslint --fix'],
  '*.{ts,tsx}': ['jest --bail --silent --findRelatedTests'],
  '*.{ts,tsx}': ['bash -c tsc --noEmit'],
  '*.{js,ts,tsx,json,md,graphql}': ['prettier --write']
}
