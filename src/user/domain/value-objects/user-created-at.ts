export class UserCreatedAt {
    public value: Date;

    constructor(
        value: Date
    ){
        this.value = value;
        this.validate();
    }

    private validate(){
        if( !this.value ) throw new Error("Fecha de creacion es requerida");
        if( !(this.value instanceof Date) ) throw new Error("Date Es una fecha inválida");
    }
}