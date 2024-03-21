function checkFileExtension(filePath, expectedExtension) {
    // Implementation
    const ext = require('path').extname(filePath);
    if (ext === expectedExtension) {
        console.log('File has the expected extension:', ext);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${ext}`);
    }
    console.log();
}

checkFileExtension('test-files/file1.txt', '.txt');

checkFileExtension('test-files/image.png', '.jpg');