import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo1.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([ext1, text2]) => {
    console.log(ext1);
    console.log(text2);
}
);