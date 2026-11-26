import { ManagerError } from "../../../common/errors/manager.error";
import { UserRepositoryPort } from "../../domain/ports/output/user-repository.port";
import { UserId } from "../../domain/value-objects/user-id";
import { UserResponse } from "../dtos/responses/user.response";


interface UseCase {
    execute(  userId: string  ): Promise<UserResponse | null>
}

export class FinOneUserByIdUseCase implements UseCase {
    
    constructor(
        private readonly userRepositoryPort: UserRepositoryPort
    ){}

    async execute(userId: string): Promise<UserResponse | null> {
        const user = await this.userRepositoryPort.findOneById( new UserId(userId) );

        if(!user) throw ManagerError.notFound("Usuario no existe")

        return user.mapToPrimitive();
    }
}
