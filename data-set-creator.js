const fs = require('fs');
const os = require('os');
const path = require('path');
const fsExtra = require("fs-extra");

var tmpDir

tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "trace-data-"));
console.debug("Created temporary dir " + tmpDir)

var trainDir = path.join(tmpDir, "train")
fs.mkdirSync(trainDir)
console.debug("Created training dir " + trainDir)

var successDir = path.join(trainDir, "success")
fs.mkdirSync(successDir)

failedDir = path.join(trainDir, "failed")
fs.mkdirSync(failedDir)

for (let i = 0; i < 25000; i++) {
    if (i % 2 === 0) {
        fs.writeFileSync(path.join(successDir, i + ".txt"), "success")
    }
    else {
        fs.writeFileSync(path.join(failedDir, i + ".txt"), "failed")
    }
}

var testDir = path.join(tmpDir, "test")
fsExtra.copySync(trainDir, testDir)
