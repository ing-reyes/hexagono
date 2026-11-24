import { Router } from "express"
import { UserRoute } from "./user/infrastructure/adapters/input/routes/user.route";

export class FactoryRoute {
    constructor(
        private readonly userRoute: UserRoute
    ) { }

    get router() {
        const router = Router();

        router.use("/users", this.userRoute.router);
        
        return router;
    }
}