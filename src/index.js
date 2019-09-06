const { readFiles } = require('./readFiles');
const { parseEmails } = require('./parser');
const { writeFiles } = require('./writeFiles');

const letsDoIt = fileName => {
  const rawData = readFiles(fileName);
  const parsedData = parseEmails(rawData);
  writeFiles(parsedData);
};

letsDoIt('emails.txt');
