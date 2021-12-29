const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'abc';

async function run() {
  try {
    // 开始连接
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const inventory = db.collection('inventory');
    // 插入文档
    // const ret = await inventory.insertOne({
    //   a: 1,
    //   b: 2,
    //   c: true,
    //   d: [
    //     {
    //       a: 1,
    //       c: 2,
    //     },
    //   ],
    // });
    // console.log('ret', ret);
    // 查找文档
    const ret = await inventory.find().toArray();
    // const ret1 = await inventory.findOne({ a: 1 });
    console.log(ret);
    // console.log(ret1);

    // 删除文档
    // const ret2 = await inventory.deleteOne({
    //   _id: ObjectId('61cb2a4ba43e4186a7872440'),
    // });
    // console.log(ret2);

    // 更新文档
    const ret3 = await inventory.updateOne({ a: 1 }, {
      $set: {
        a: 100,
      },
    });
    console.log('ret', ret3);

  } catch (error) {
    console.log('连接失败');
  } finally {
    client.close();
  }
}

run();
