import { UserRepositoryPort } from "../../domain/ports/output/user-repository.port";
import { UserId } from "../../domain/value-objects/user-id";


interface UseCase {
    execute(  userId: string  ): Promise<void>
}

export class DeleteUserUseCase implements UseCase {
    
    constructor(
        private readonly userRepositoryPort: UserRepositoryPort
    ){}

    async execute(userId: string): Promise<void> {
        return this.userRepositoryPort.delete( new UserId(userId) )
    }
}
