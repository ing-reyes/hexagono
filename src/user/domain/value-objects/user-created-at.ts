import { ManagerError } from "../../../common/errors/manager.error";

export class UserCreatedAt {
    public value: Date;

    constructor(
        value: Date
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw ManagerError.badRequest("Fecha de creacion es requerida");
        if( !(this.value instanceof Date) ) throw ManagerError.badRequest("Date Es una fecha inválida");
    }
}