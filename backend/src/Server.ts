import { Config } from './config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http, { Server as HttpServer } from 'http';
import { AddressInfo } from 'net';
import { authenticationRouter } from './infrastructure/routes/authentication';
import errorHandler from './infrastructure/middlewares/ErrorHandler';

export default class Server {
  private readonly express: express.Express;
  private readonly port: number;
  private httpServer?: HttpServer;

  constructor() {
    this.express = express();
    this.port = Number(Config.PORT);

    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cookieParser());
  }

  loadRoutes() {
    const router = express.Router();
    router.get('/auth', authenticationRouter);
    router.use(errorHandler);
    this.express.use('/api', router);
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      const env = this.express.get('env') as string;
      this.httpServer = http.createServer(this.express);

      this.httpServer.listen(this.port, () => {
        const availablePort = (this.httpServer?.address() as AddressInfo).port;
        const protocol = 'http';
        const baseUrl = `${protocol}://localhost:${availablePort}`;
        console.log(`Backend App is running at ${baseUrl} in ${env} mode`);
        resolve();
      });
    });
  }

  getHTTPServer(): HttpServer | undefined {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        });
      }
      resolve();
    });
  }
}
