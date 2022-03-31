import express, { Application } from 'express';
import cors from 'cors';

import { userRoutes, postRoutes } from '../routes';

class Server {
  private app: Application;
  private port: string;

  private apiBase = '/api/v1';

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';

    this.setMiddlewares();
    this.setRoutes();
  }

  setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  setRoutes(): void {
    this.app.use(`${this.apiBase}/users`, userRoutes);
    this.app.use(`${this.apiBase}/posts`, postRoutes);
  }

  run(): void {
    this.app.listen(this.port, () => {
      /* eslint no-console: "off" */
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
