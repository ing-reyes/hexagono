export class UserEmail {
    public value: string;

    constructor(
        value: string
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw new Error("Correo es requirido");
        if( this.value.length < 3 ) throw new Error("Correo es muy corto");
    }
}