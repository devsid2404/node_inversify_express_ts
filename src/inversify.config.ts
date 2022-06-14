import { Container } from "inversify";
import AppServer from "./AppServer";
import InternalTestAPI from "./controllers/testApi/testApi.controller";
import Service_Identifier from "./Symbols";

const appContainer = new Container({defaultScope: 'Singleton'});
appContainer.bind<InternalTestAPI>(Service_Identifier.InternalTestAPI).to(InternalTestAPI);
appContainer.bind<AppServer>(Service_Identifier.AppServer).to(AppServer);

export default appContainer;