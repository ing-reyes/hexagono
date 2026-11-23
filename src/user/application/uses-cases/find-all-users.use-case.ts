import { PaginationDto } from '../../../common/dtos/pagination.dto';
import { UserRepositoryPort } from "../../domain/ports/output/user-repository.port";
import { UserResponse } from "../dtos/responses/user.response";


interface UseCase {
    execute(paginationDto: PaginationDto): Promise<UserResponse[] | null>
}

export class FindAllUsersUseCase implements UseCase {

    constructor(
        private readonly userRepositoryPort: UserRepositoryPort
    ) { }

    async execute(paginationDto: PaginationDto): Promise<UserResponse[] | null> {
        const users = await this.userRepositoryPort.findAll(paginationDto);

        if (!users) throw new Error("Usuarios no existe");

        return users.map((user) => user.mapToPrimitive());
    }
}
