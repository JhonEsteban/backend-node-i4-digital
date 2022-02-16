import express, { Application } from 'express';
import cors from 'cors';

class Server {
  private app: Application;

  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';

    this.setMiddlewares();
  }

  setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  run(): void {
    this.app.listen(this.port, () => {
      /* eslint no-console: "off" */
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
