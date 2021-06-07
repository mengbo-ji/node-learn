const fs = require('fs');

fs.statSync('.', (err, data) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('data', data);
  }
});
