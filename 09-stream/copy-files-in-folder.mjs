import fs from "fs";

const sourceDir = "./files";
const destinationDir = "./copied-files";

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} doesn't exist`);
  console.log("Exiting");
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmdirSync(destinationDir);
}

fs.mkdirSync(destinationDir);
