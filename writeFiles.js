const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './data.csv',
  header: [{ id: 'email', title: 'email' }],
});

const { parseEmails } = require('./parser');

const data = parseEmails();

csvWriter.writeRecords(data).then(() => {
  console.log('...Done');
});
