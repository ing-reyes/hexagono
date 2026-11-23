import { Request, Response } from "express"
import { CreateUserUseCase } from "../../../../application/uses-cases/create-user.use-case"
import { CreateUserRequest } from "../../../../application/dtos/requests/create-user.request"
import { UpdateUserRequest } from "../../../../application/dtos/requests/update-user.request"
import { UpdateUserUseCase } from "../../../../application/uses-cases/update-user.use-case"
import { DeleteUserUseCase } from "../../../../application/uses-cases/delete-user.use-case"
import { FinOneUserByIdUseCase } from "../../../../application/uses-cases/find-one-user-by-id.use-case"
import { FindAllUsersUseCase } from "../../../../application/uses-cases/find-all-users.use-case"
import { PaginationDto } from "../../../../../common/dtos/pagination.dto"

export class UserController {

    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly updateUserUseCase: UpdateUserUseCase,
        private readonly deleteUserUseCase: DeleteUserUseCase,
        private readonly findOneUserByIdUseCase: FinOneUserByIdUseCase,
        private readonly findOneUserByEmailUseCase: FinOneUserByIdUseCase,
        private readonly findAllUsersUseCase: FindAllUsersUseCase,
    ) { }

    create = (req: Request, res: Response) => {
        const [error, createUserRequest] = CreateUserRequest.validate(req.body)
        if (error) {
            res.status(400).json({ error, status: 400 })
            return;
        }

        //* Use Case
        this.createUserUseCase.execute(createUserRequest!)
            .then((user) => res.status(201).json(user))
            .catch((err) => res.json(err));
    }

    update = (req: Request, res: Response) => {
        const [error, createUserRequest] = UpdateUserRequest.validate(req.body)
        if (error) {
            res.status(400).json({ error, status: 400 })
            return;
        }

        //* Use Case
        this.updateUserUseCase.execute(createUserRequest!)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.json(err));
    }

    delete = (req: Request, res: Response) => {

        //* Use Case
        this.deleteUserUseCase.execute(req.params.id as string)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.json(err));
    }

    findOneById = (req: Request, res: Response) => {

        //* Use Case
        this.findOneUserByIdUseCase.execute(req.params.id as string)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.json(err));
    }

    findOneByEmail = (req: Request, res: Response) => {

        //* Use Case
        this.findOneUserByEmailUseCase.execute(req.params.email as string)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.json(err));
    }

    findAllUsers = (req: Request, res: Response) => {

        const [error, paginationDto] = PaginationDto.validate(req.query);
        if (error) {
            res.status(400).json({ error, status: 400 })
            return;
        }

        //* Use Case
        this.findAllUsersUseCase.execute(paginationDto!)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.json(err));
    }
}





