const emailsInString = require('emails-in-string');
const { readFiles } = require('./readFiles');
const email = readFiles('emails.txt');

const parseEmails = () => {
  const uniqueEmails = emailsInString(email);
  const moreUniqueEmails = new Set(uniqueEmails);
  let formatted = [];

  for (let item of moreUniqueEmails) {
    formatted.push({ email: item });
  }

  return formatted;
};

module.exports = { parseEmails };
