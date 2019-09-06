const fs = require('fs');

const readFiles = file => {
  const data = fs.readFileSync(file, 'utf8');
  console.log('files read', data);
  return data;
};

module.exports = { readFiles };
