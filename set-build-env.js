// node set-build-env.js [DEV|STAGE|PROD|E2E]

const fs = require('fs');


fs.writeFile('build-env.js', `export const BUILD_ENV = '${process.argv.slice(2)}'`, 'utf-8', (writeErr) => {
  if (writeErr) throw writeErr;
});
