export class UpdateUserRequest {


    constructor(
        public id: string,
        public username: string,
        public email: string,
        public password: string,
        public createdAt: Date,
    ) { }

    static validate(data: { [key: string]: any }): [string | undefined, UpdateUserRequest | undefined] {
        const { id, username, email, password, createdAt } = data;

        if(!id) return ["Id es requerido", undefined];
        if(!username) return ["Username es requerido", undefined];
        if(!email) return ["Email es requerido", undefined];
        if(!password) return ["Password es requerido", undefined];

        return [undefined, new UpdateUserRequest(id, username, email, password, createdAt)]
    }

}