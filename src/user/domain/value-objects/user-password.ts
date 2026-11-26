import { ManagerError } from "../../../common/errors/manager.error";

export class UserPassword {
    public value: string;

    constructor(
        value: string
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw ManagerError.badRequest("Contraseña es requirida");
        if( this.value.length < 6 ) throw ManagerError.badRequest("Contraseña es muy corta");
    }
}