import { FactoryRoute } from "./factory-route";
import { AppServer } from "./server";
import { CreateUserUseCase } from "./user/application/uses-cases/create-user.use-case";
import { DeleteUserUseCase } from "./user/application/uses-cases/delete-user.use-case";
import { FindAllUsersUseCase } from "./user/application/uses-cases/find-all-users.use-case";
import { FindOneUserByEmailUseCase } from "./user/application/uses-cases/find-one-user-by-email.use-case";
import { FinOneUserByIdUseCase } from "./user/application/uses-cases/find-one-user-by-id.use-case";
import { UpdateUserUseCase } from "./user/application/uses-cases/update-user.use-case";
import { UserController } from "./user/infrastructure/adapters/input/controllers/user.controller";
import { UserRoute } from "./user/infrastructure/adapters/input/routes/user.route";
import { InMemoryUserRepository } from "./user/infrastructure/adapters/output/persistence/in-memory/in-memory-user.repository";

const inMemoryUserRepository = new InMemoryUserRepository()

//* Use Case (User)
const createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
const updateUserUseCase = new UpdateUserUseCase(inMemoryUserRepository);
const deleteUserUseCase = new DeleteUserUseCase(inMemoryUserRepository);
const findOneUserByIdUseCase = new FinOneUserByIdUseCase(inMemoryUserRepository);
const findOneUserByEmailUseCase = new FindOneUserByEmailUseCase(inMemoryUserRepository);
const findAllUsersUseCase = new FindAllUsersUseCase(inMemoryUserRepository);

const userController = new UserController(
    createUserUseCase,
    updateUserUseCase,
    deleteUserUseCase,
    findOneUserByIdUseCase,
    findOneUserByEmailUseCase,
    findAllUsersUseCase,
)

const userRoute = new UserRoute(userController);

const factory = new FactoryRoute(userRoute);

export const server = new AppServer({ port: 3000, router: factory.router });




