import express, { Application } from 'express';
import cors from 'cors';

import { userRoutes, postRoutes, requestRoutes } from '../routes';

import connectToDataBase from '../database';

class Server {
  private app: Application;
  private port: string;

  private apiBase = '/api/v1';

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';

    this.setMiddlewares();
    this.setRoutes();

    connectToDataBase();
  }

  private setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  private setRoutes(): void {
    this.app.use(`${this.apiBase}/users`, userRoutes);
    this.app.use(`${this.apiBase}/posts`, postRoutes);
    this.app.use(`${this.apiBase}/requests`, requestRoutes);
  }

  public run(): void {
    this.app.listen(this.port, () => {
      /* eslint no-console: "off" */
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
