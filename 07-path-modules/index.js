const path = require("path");

const filePath = "/Users/Madiyar/Desktop/node/index.js";
const textFilePath = "/Users/Madiyar/Desktop/file.txt";
const relativePath = "./node/movie.mov";
const directoryPath = "./node/subfolder";

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(relativePath));

console.log(path.basename(filePath));
console.log(path.basename(directoryPath));

console.log(path.dirname(filePath));
console.log(path.dirname(directoryPath));

console.log(path.resolve(relativePath));

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
