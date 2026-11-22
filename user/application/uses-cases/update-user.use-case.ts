import { CreateUserCommand } from "../../domain/commands/create-user.command";
import { UpdateUserCommand } from "../../domain/commands/update-user.command";
import { UserRepositoryPort } from "../../domain/ports/output/user-repository.port";
import { UserCreatedAt } from "../../domain/value-objects/user-created-at";
import { UserEmail } from "../../domain/value-objects/user-email";
import { UserId } from "../../domain/value-objects/user-id";
import { UserPassword } from "../../domain/value-objects/user-password";
import { UserName } from "../../domain/value-objects/username";
import { CreateUserRequest } from "../dtos/requests/create-user.request";
import { UpdateUserRequest } from '../dtos/requests/update-user.request';


interface UseCase {
    execute(  updateUserRequest: UpdateUserRequest  ): Promise<void>
}

export class UpdateUserUseCase implements UseCase {
    
    constructor(
        private readonly userRepositoryPort: UserRepositoryPort
    ){}

    async execute(updateUserRequest: UpdateUserRequest): Promise<void> {
        const { id, username, email, password, createdAt } = updateUserRequest;
        
        const command = new UpdateUserCommand(
            new UserId(id),
            new UserName(username),
            new UserEmail(email),
            new UserPassword(password),
            new UserCreatedAt(createdAt)
        );
        
        return this.userRepositoryPort.update(command)
    }
}
