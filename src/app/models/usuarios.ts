export class Usuarios {
    id:number;
    nombre: string;
    nombreusuario: string;
    email: string;

    constructor(nombre: string, nombreusuario: string, email: string){
        this.nombre = nombre;
        this.nombreusuario = nombreusuario;
        this.email = email;
    }

}
