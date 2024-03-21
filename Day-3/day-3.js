function executeCommand(command) {
    // Implementation
    require('child_process').exec(command, (err, stdout, sterr) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Command Output:');
            console.log(`${stdout}`);
        }
    });
}

executeCommand('ls');
executeCommand('echo "Hello, Node.js!"');