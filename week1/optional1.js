const fs = require('fs');
const os = require('os');

fs.writeFile('output2.txt', 'Platform: ' + os.platform() + '\n CPUs: ' + os.cpus() + '\n Hostname: ' + os.hostname(), (err) => {
if (err) {
console.error('Error writing file:', err);
} else {
console.log('Data written to output.txt');
}
});