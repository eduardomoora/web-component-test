// elements-build.js
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/web-component/runtime.js',
    './dist/web-component/polyfills.js',
    './dist/web-component/main.js'
  ];

  await fs.ensureDir('elements'); // Carpeta de salida final
  await concat(files, 'elements/web-components.js');
  console.log('Archivos concatenados exitosamente en elements/web-components.js');
})();
