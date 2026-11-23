import { UserCreatedAt } from "./user-created-at";
import { UserEmail } from "./user-email";
import { UserId } from "./user-id";
import { UserPassword } from "./user-password";
import { UserName } from "./username";

export class User {

    public id: UserId;
    public username: UserName;
    public email: UserEmail;
    public password: UserPassword;
    public createdAt: UserCreatedAt;

    constructor(
        id: UserId,
        username: UserName,
        email: UserEmail,
        password: UserPassword,
        createdAt: UserCreatedAt,
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }

    public mapToPrimitive() {
        return {
            id: this.id.value,
            username: this.username.value,
            email: this.email.value,
            password: this.password.value,
            createdAt: this.createdAt.value,
        }
    }

}