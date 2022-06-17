import { Container } from "inversify";
import AppServer from "./AppServer";
import CommonUtils from "./common/common.util";
import PostRepository from "./components/posts/post.repository";
import PostService from "./components/posts/post.service";
import PostController from "./controllers/posts/posts.controller";
import InternalTestAPI from "./controllers/testApi/testApi.controller";
import Service_Identifier from "./Symbols";

const appContainer = new Container({defaultScope: 'Singleton'});
appContainer.bind<InternalTestAPI>(Service_Identifier.InternalTestAPI).to(InternalTestAPI);
appContainer.bind<AppServer>(Service_Identifier.AppServer).to(AppServer);
appContainer.bind<CommonUtils>(Service_Identifier.CommonUtils).to(CommonUtils);

appContainer.bind<PostRepository>(Service_Identifier.PostRepository).to(PostRepository);
appContainer.bind<PostService>(Service_Identifier.PostService).to(PostService);
appContainer.bind<PostController>(Service_Identifier.PostController).to(PostController);

export default appContainer;