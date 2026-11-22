import { UserRepositoryPort } from "../../domain/ports/output/user-repository.port";
import { UserEmail } from "../../domain/value-objects/user-email";
import { UserResponse } from "../dtos/responses/user.response";


interface UseCase {
    execute(  userEmail: string  ): Promise<UserResponse | null>
}

export class FindOneUserByEmailUseCase implements UseCase {
    
    constructor(
        private readonly userRepositoryPort: UserRepositoryPort
    ){}

    async execute(userEmail: string): Promise<UserResponse | null> {
        const user = await this.userRepositoryPort.findOneByEmail( new UserEmail(userEmail) );

        if(!user) throw new Error("Usuario no existe");

        return user.mapToPrimitive();
    }
}
