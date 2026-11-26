import { PaginationDto } from '../../../../../../common/dtos/pagination.dto';
import { CreateUserCommand } from '../../../../../domain/commands/create-user.command';
import { UpdateUserCommand } from '../../../../../domain/commands/update-user.command';
import { UserRepositoryPort } from '../../../../../domain/ports/output/user-repository.port';
import { User } from '../../../../../domain/value-objects/user';
import { UserCreatedAt } from '../../../../../domain/value-objects/user-created-at';
import { UserEmail } from '../../../../../domain/value-objects/user-email';
import { UserId } from '../../../../../domain/value-objects/user-id';
import { UserPassword } from '../../../../../domain/value-objects/user-password';
import { UserName } from '../../../../../domain/value-objects/username';


export class InMemoryUserRepository implements UserRepositoryPort {

    private users: User[] = [
        {
            id: new UserId(("111111").toString()),
            username: new UserName("ing-reyes"),
            email: new UserEmail("reyes@google.com"),
            password: new UserPassword("1234567"),
            createdAt: new UserCreatedAt(new Date()),
            mapToPrimitive: function (): { id: string; username: string; email: string; password: string; createdAt: Date; } {
                return {
                    id: this.id.value,
                    username: this.username.value,
                    email: this.email.value,
                    password: this.password.value,
                    createdAt: this.createdAt.value
                }
            }
        }
    ]

    async save(createUserCommand: CreateUserCommand): Promise<void> {
        const { email, username, password, createdAt } = createUserCommand
        const user: User = {
            id: new UserId((this.users.length + 1).toString()),
            username: new UserName(username.value),
            email: new UserEmail(email.value),
            password: new UserPassword(password.value),
            createdAt: new UserCreatedAt(createdAt.value),
            mapToPrimitive: function (): { id: string; username: string; email: string; password: string; createdAt: Date; } {
                return {
                    id: this.id.value,
                    username: this.username.value,
                    email: this.email.value,
                    password: this.password.value,
                    createdAt: this.createdAt.value
                }
            }
        }

        this.users.push(user);
    }
    update(updateUserCommand: UpdateUserCommand): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async delete(userId: UserId): Promise<void> {
        this.users = this.users.filter((user) => user.id.value !== userId.value)
    }
    async findOneById(userId: UserId): Promise<User | null> {
        return this.users.find((user) => user.id.value === userId.value) ?? null;
    }
    async findOneByEmail(userEmail: UserEmail): Promise<User | null> {
        return this.users.find((user) => user.email.value === userEmail.value) ?? null;
    }
    async findAll(paginationDto: PaginationDto): Promise<User[] | null> {
        return this.users
    }
}

