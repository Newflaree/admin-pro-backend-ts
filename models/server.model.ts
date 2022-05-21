import express, { Application } from 'express';
import cors from 'cors';
// Database
import dbConnection from '../database/config.db';
// Interfaces
import { ApiPaths } from '../interfaces/paths-interfaces';
// Routes
import {
  authRouter,
  hospitalsRouter,
  usersRouter
} from '../routes';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: ApiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.apiPaths = {
      auth: '/api/auth',
      users: '/api/users',
      hospitals: '/api/hospitals'
    }

    // Init methods
    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRouter );
    this.app.use( this.apiPaths.hospitals, hospitalsRouter );
    this.app.use( this.apiPaths.users, usersRouter );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    });
  }
}

export default Server;
