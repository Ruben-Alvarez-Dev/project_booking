const path = require('node:path');

const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);