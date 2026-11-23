import { CreateUserCommand } from "../../domain/commands/create-user.command";
import { UserRepositoryPort } from "../../domain/ports/output/user-repository.port";
import { UserCreatedAt } from "../../domain/value-objects/user-created-at";
import { UserEmail } from "../../domain/value-objects/user-email";
import { UserPassword } from "../../domain/value-objects/user-password";
import { UserName } from "../../domain/value-objects/username";
import { CreateUserRequest } from "../dtos/requests/create-user.request";


interface UseCase {
    execute(  createUserRequest: CreateUserRequest  ): Promise<void>
}

export class CreateUserUseCase implements UseCase {
    
    constructor(
        private readonly userRepositoryPort: UserRepositoryPort
    ){}

    async execute(createUserRequest: CreateUserRequest): Promise<void> {
        const { username, email, password, createdAt } = createUserRequest;
        
        const command = new CreateUserCommand(
            new UserName(username),
            new UserEmail(email),
            new UserPassword(password),
            new UserCreatedAt(createdAt)
        );
        
        return this.userRepositoryPort.save(command)
    }
}
