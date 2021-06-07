const fs = require('fs');


fs.readFileSync('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('data', data);
  }
});
