const { readFiles } = require('./readFiles');
const { parseEmails } = require('./parser');
const { writeFiles } = require('./writeFiles');

const letsDoIt = fileName => {
  const rawData = readFiles('../emails.txt');
  const parsedData = parseEmails(rawData);
  writeFiles(parsedData);
};

letsDoIt();
