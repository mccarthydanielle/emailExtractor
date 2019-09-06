const fs = require('fs');

const readFiles = file => {
  const data = fs.readFileSync(file, 'utf8');
  return data;
};

module.exports = { readFiles };
