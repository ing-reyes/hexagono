export class UserId {
    public value: string;

    constructor(
        value: string
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw new Error("Id de usuario es requirido");
        if( this.value.length<5 ) throw new Error("Id no valido");
    }
}