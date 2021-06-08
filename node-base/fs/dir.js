const fs = require('fs/promises');

async function print(path) {
  const dir = await fs.opendir(path);

  for await (const dirent of dir) {
    console.log('dirent', dirent.name);
  }
}

print('./').catch(console.error);

// async function print1(path) {
//   const dir = await fs.opendir(path);
//   let dirent = await dir.read();
//   while (dirent) {
//     console.log(dirent.name);
//     dirent = await dir.read();
//   }

//   dir.close();
// }
// print1('./').catch(console.error);

async function print2(path) {
  const files = await fs.readdir(path);

  for await (const file of files) {
    console.log('file', file);
  }
}

print2('./');

fs.mkdir('./testMkdir', { recursive: true }, err => {
  if (err) throw err;
});

fs.rmdir('./testMkdir', { recursive: true }, err => console.log(err));
