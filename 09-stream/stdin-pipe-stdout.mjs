import { Transform } from "stream";
import fs from "fs";

const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk;
    console.log(upperCased);
    cb(null, upperCased);
  },
});

const reversedStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const arrayOfChars = chunk.toString().split("");
    const lastChar = arrayOfChars.pop();
    const reversed = arrayOfChars.reverse().concat(lastChar).join("");
    cb(null, reversed);
  },
});

process.stdin.pipe(upperCaseStream).pipe(reversedStream).pipe(process.stdout);
