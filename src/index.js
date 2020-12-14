const express =  require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

const formatResponse = require('./services/formatResponse');
const { handleRequest } = require('./services/handleRequest');
const validate = require('./services/validate');

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.text({ defaultCharset: 'utf-8' }));

app.post('/upload/:file', async (req, res, next) => {
 try {
  if (!validate(req.body)) {
    res.statusCode = 400;

    throw new Error('incorrect content of file');
  }
  const result = await handleRequest(req.body);
  res.send(result);
 } catch (e) {
   console.log('error', e);
   res.send({
     message: e.message
   });
 }
});

app.listen(port, () => {
  console.log(`App listening ${port}`)
});