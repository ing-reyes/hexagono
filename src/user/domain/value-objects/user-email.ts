import { ManagerError } from "../../../common/errors/manager.error";

export class UserEmail {
    public value: string;

    constructor(
        value: string
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw ManagerError.badRequest("Correo es requirido");
        if( this.value.length < 3 ) throw ManagerError.badRequest("Correo es muy corto");
    }
}