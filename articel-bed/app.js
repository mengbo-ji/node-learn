const express = require('express');
const { MongoClient } = require('mongodb');

const dbURL = 'mongodb://localhost:27017/';
const dbClient = new MongoClient(dbURL);

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/articles', async (req, res, next) => {
  try {
    // 1. 获取客户端表单数据
    const { article } = req.body;
    // 2. 数据验证
    if (!article || !article.title || !article.body || !article.description) {
      return res
        .status(422)
        .json({
          message: '请求参数不符合规则要求',
        });
    }
    // 3. 把验证通过的数据插入数据库中
    //    成功 -> 发送成功响应
    //    失败 -> 发送失败响应
    await dbClient.connect();

    article.createTime = new Date();
    article.updateTime = new Date();
    const articlesCollection = dbClient.db('test').collection('articles');
    const ret = await articlesCollection.insertOne(article);
    article.id = ret.insertedId;

    Reflect.deleteProperty(article, '_id');

    res
      .status(200)
      .json({
        code: 200,
        success: true,
        data: true,
        message: '添加成功',
      });
  } catch (error) {
    next(error);
  }
});

app.get('/articles', async (req, res, next) => {
  try {
    let { pageSize = 10, pageNum = 1 } = req.query;
    pageSize = Number.parseInt(pageSize);
    pageNum = Number.parseInt(pageNum);

    await dbClient.connect();

    const articlesCollection = dbClient.db('test').collection('articles');
    const list = await articlesCollection
      .find() // 查询到所有数据
      .skip((pageNum - 1) * pageSize) // 跳过多少条
      .limit(pageSize) // 拿出多少条
      .toArray();
    const total = await articlesCollection.countDocuments();

    res
      .status(200)
      .json({
        code: 200,
        success: true,
        data: {
          list,
          total,
          pageSize,
          pageNum,
        },
        message: '查询成功',
      });
  } catch (error) {
    next(error);
  }
});

app.get('/articles/:id', (req, res) => {
  res.send('get-articles:id');
});

app.patch('/articles/:id', (req, res) => {
  res.send('patch-articles:id');
});

app.delete('/articles/:id', (req, res) => {
  res.send('delete-articles:id');
});

// 错误处理中间件
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({
      message: err.message,
    });
  next();
});

app.listen(1234, () => {
  console.log('server is running at port 1234...');
});
