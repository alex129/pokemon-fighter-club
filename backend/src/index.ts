import express from 'express';
import 'dotenv/config';
import { Config } from './config';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(Config.PORT, () => {
  console.log(`Example app listening on port ${Config.PORT}`);
});
