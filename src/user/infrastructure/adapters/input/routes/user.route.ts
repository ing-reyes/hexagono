import { Router } from "express"
import { UserController } from "../controllers/user.controller";

export class UserRoute {
    constructor(
        private readonly userController: UserController
    ) { }

    get router() {
        const router = Router();

        router.post("/", this.userController.create);
        router.put("/", this.userController.update);
        router.delete("/:id", this.userController.delete);
        router.get("/:id", this.userController.findOneById);
        router.get("/:email", this.userController.findOneByEmail);
        router.get("/", this.userController.findAllUsers);

        return router;
    }
}