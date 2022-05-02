import express, { Application } from 'express';
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces/interfaces';
// Routes
import { authRouter } from '../routes';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: ApiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';
    this.apiPaths = {
      auth: '/api/auth'
    }

    // Init methods
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRouter );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    });
  }
    
}

export default Server;
