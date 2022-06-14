import 'reflect-metadata';
import * as dotenv from 'dotenv';
import appContainer from './inversify.config';
import AppServer from './AppServer';
import Symbols from './Symbols';

// Setting up env config files
dotenv.config({path: `./envFiles/.${process.env.NODE_ENV || 'dev'}-env`});

appContainer.get<AppServer>(Symbols.AppServer).start(appContainer);
