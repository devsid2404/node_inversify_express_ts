import { controller, httpGet } from "inversify-express-utils";


@controller('/testApi')
export default class InternalTestAPI {

    @httpGet('/get')
    public async get(
        req,
        res,
        next
    ){
        try {
            res.json({message: 'Test Api running'})
        } catch (err) {
            next(err);
        }
    }

}