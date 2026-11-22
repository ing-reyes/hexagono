export class UserPassword {
    public value: string;

    constructor(
        value: string
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw new Error("Contraseña es requirida");
        if( this.value.length < 6 ) throw new Error("Contraseña es muy corta");
    }
}