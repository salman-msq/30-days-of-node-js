
function resolvePath(relativePath) {
    // Implementation
    absolutePath = require('path').resolve(relativePath);
    console.log('Resolved Path:');
    console.log(absolutePath);
};

resolvePath('../project/folder/file.txt');

resolvePath('nonexistent-folder/file.txt');