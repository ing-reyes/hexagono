export class CreateUserRequest {


    constructor(
        public username: string,
        public email: string,
        public password: string,
        public createdAt: Date,
    ) { }

    static validate(data: { [key: string]: any }): [string | undefined, CreateUserRequest | undefined] {
        const { username, email, password, createdAt } = data;

        if(!username) return ["Username es requerido", undefined];
        if(!email) return ["Email es requerido", undefined];
        if(!password) return ["Password es requerido", undefined];

        return [undefined, new CreateUserRequest(username, email, password, createdAt)]
    }

}