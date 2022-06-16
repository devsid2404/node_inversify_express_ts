import * as bodyParser from 'body-parser';
import { Server } from 'http';
import { Container, injectable } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";



@injectable()
export default class AppServer {
    private port: number;
    private container: Container;
    private expressServer: InversifyExpressServer;
    private httpServer: Server; 

    private async initializeExpressServer():Promise<void> {
        this.expressServer =  new InversifyExpressServer(this.container, null, {
            rootPath: '/api'
        });
    }

    private async addMiddleware():Promise<void> { 
        this.expressServer.setConfig(app => {
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({extended: true}));
            app.disable('x-powered-by');
        });

        // this.expressServer.setErrorConfig(app => {
        //     app.use((err, req, res, next) => {
        //         let statusCode;
        //         res.status(statusCode).json({
        //             name: err.name,
        //             message: err.message,
        //             data: err.data
        //         });
        //     });
        // });
    }

    private async startServer():Promise<void>{
        const app = this.expressServer.build();
        this.httpServer = await app.listen(this.port);
        console.log(`App up at ${process.env.PORT}`);
    }


    public async start(appContainer: Container):Promise<void> {
        this.container = appContainer;
        this.port = parseInt(process.env.PORT) || 8000;
        await this.initializeExpressServer();
        await this.addMiddleware();
        await this.startServer();
        this.gracefulShutdwonServer();
    }


    private async gracefulShutdwonServer():Promise<void>{
        process.on('SIGTERM', () => {
            if (this.httpServer) {
                this.httpServer.close();
            }
          });

        process.on('SIGINT', () => {
            if (this.httpServer) {
                this.httpServer.close();
            }
          });
    }


    

    



}