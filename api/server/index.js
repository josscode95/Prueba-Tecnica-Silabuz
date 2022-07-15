import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router as routerScrap } from '../routes/scrap_silabuz.js'

class Server{

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      scrap_silabuz: '/scrap-silabuz'
    }
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  routes(){
    this.app.use(this.path.scrap_silabuz, routerScrap)
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto: ', this.port);
    })
  }

}

export default Server;