import { ManagerError } from "../../../common/errors/manager.error";

export class UserId {
    public value: string;

    constructor(
        value: string
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw ManagerError.badRequest("Id de usuario es requirido");
        if( this.value.length<5 ) throw ManagerError.badRequest("Id no valido");
    }
}