import { Router } from "express"
import { UserController } from "../controllers/user.controller";

export class UserRoute {
    constructor(
        private readonly userController: UserController
    ) { }

    get router() {
        const router = Router();

        router.post("/users", this.userController.create);
        router.put("/users", this.userController.update);
        router.delete("/users/:id", this.userController.delete);
        router.get("/users/:id", this.userController.findOneById);
        router.get("/users/:email", this.userController.findOneByEmail);
        router.get("/users", this.userController.findAllUsers);

        return router;
    }
}