const fs = require("fs");
const path = require("path");

const sermonsDir = path.join(__dirname, "..", "sermons");

function readSermons() {
  return fs.readdirSync(sermonsDir).map((filename) => {
    const data = fs.readFileSync(path.join(sermonsDir, filename));
    return JSON.parse(data);
  });
}

module.exports = { readSermons };
