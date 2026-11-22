import { UserName } from "../value-objects/username";
import { UserEmail } from '../value-objects/user-email';
import { UserPassword } from '../value-objects/user-password';
import { UserCreatedAt } from '../value-objects/user-created-at';

export class CreateUserCommand {

    constructor(
        public username: UserName,
        public email: UserEmail,
        public password: UserPassword,
        public createdAt: UserCreatedAt,
    ){}

}