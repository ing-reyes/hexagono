import { CreateUserCommand } from "../../commands/create-user.command";
import { UpdateUserCommand } from "../../commands/update-user.command";
import { UserId } from "../../value-objects/user-id";
import { User } from '../../value-objects/user';
import { UserEmail } from "../../value-objects/user-email";
import { PaginationDto } from '../../../../common/dtos/pagination.dto';




export abstract class UserRepositoryPort {

    abstract save( createUserCommand: CreateUserCommand ): Promise<void>;
    abstract update( updateUserCommand: UpdateUserCommand ): Promise<void>;
    abstract delete( userId: UserId ): Promise<void>;
    abstract findOneById( userId: UserId ): Promise<User | null>;
    abstract findOneByEmail( userEmail: UserEmail ): Promise<User | null>;
    abstract findAll( paginationDto: PaginationDto ): Promise<User[] | null>;

}


