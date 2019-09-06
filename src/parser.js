const emailsInString = require('emails-in-string');

const parseEmails = data => {
  const uniqueEmails = emailsInString(data);
  const moreUniqueEmails = new Set(uniqueEmails);
  let formatted = [];

  for (let item of moreUniqueEmails) {
    formatted.push({ email: item });
  }

  return formatted;
};

module.exports = { parseEmails };
