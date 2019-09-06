const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './data.csv',
  header: [{ id: 'email', title: 'email' }],
});

const writeFiles = data => {
  csvWriter.writeRecords(data).then(() => {
    console.log('...Done');
  });
};

module.exports = { writeFiles };
