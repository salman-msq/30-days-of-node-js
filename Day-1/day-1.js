const fs = require('fs');

function readFileContent(filePath) {
    // Implementation
    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log("Error reading file:", err.message);
        } else {
            console.log(data.toString());
        }
    });
};

readFileContent('test-files/file1.txt');

readFileContent('test-files/empty-file.txt');

readFileContent('test-files/nonexistent-file.txt');