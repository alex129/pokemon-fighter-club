import { Config } from './config';
import express from 'express';

export class Server {
  private readonly express: express.Express;
  private readonly port: number;

  constructor() {
    this.express = express();
    this.port = Number(Config.PORT);

    //TODO: MIDDLEWARES
  }

  loadRoutes() {
    const router = express.Router();
    this.express.use('/api', router);
    router.get('/', (req, res) => {
      res.send('Hello World!');
    });
  }

  listen() {
    this.express.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}
