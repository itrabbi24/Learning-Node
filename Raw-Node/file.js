// Synchronous Code

const fs = require("fs");

// Reading a file synchronously
const readText = fs.readFileSync('./text/read.txt', 'utf-8');

// Writing to a file synchronously
fs.writeFileSync('./text/write.txt', readText + " this is my written text");

console.log("File written successfully.");



// Asynchronous Code
const fs = require("fs");

// Reading a file asynchronously
fs.readFile('./text/read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Writing to a file asynchronously
    fs.writeFile('./text/write.txt', data + " this is my written text", (err) => {
        if (err) {
            console.error("Error writing the file:", err);
            return;
        }

        console.log("File written successfully.");
    });
});