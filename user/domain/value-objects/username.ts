export class UserName {
    public value: string;

    constructor(
        value: string
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw new Error("Username es requirido");
        if( this.value.length < 3 ) throw new Error("Username es muy corto");
    }
}