import { server } from "./container";
import { FactoryRoute } from "./factory-route";
import { AppServer } from "./server";
import { UserRoute } from "./user/infrastructure/adapters/input/routes/user.route";

(()=>{
    bootstrap();
})()


async function bootstrap() {

    server.start();

}