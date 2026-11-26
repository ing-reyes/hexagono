import { ManagerError } from "../../../common/errors/manager.error";

export class UserName {
    public value: string;

    constructor(
        value: string
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw ManagerError.badRequest("Username es requirido");
        if( this.value.length < 3 ) throw ManagerError.badRequest("Username es muy corto");
    }
}