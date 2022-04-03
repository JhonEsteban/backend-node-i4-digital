import express, { Application } from 'express';

import cors from 'cors';
import http from 'http';

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import swaggerConfig from '../config/swaggerConfig';

import connectToDataBase from '../database';
import { userRoutes, postRoutes, requestRoutes } from '../routes';

class Server {
  private app: Application;
  private port: string;

  private apiBase = '/api/v1';
  private serverApp!: http.Server;

  private swaggerSetup = swaggerJsDoc(swaggerConfig);

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';

    this.setMiddlewares();
    this.setRoutes();

    connectToDataBase();
  }

  get getApp() {
    return this.app;
  }

  get getApiBase() {
    return this.apiBase;
  }

  get getServerApp() {
    return this.serverApp;
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

    this.app.use(
      `${this.apiBase}/docs`,
      swaggerUi.serve,
      swaggerUi.setup(this.swaggerSetup)
    );
  }

  public run(): void {
    this.serverApp = this.app.listen(this.port, () => {
      /* eslint no-console: "off" */
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
