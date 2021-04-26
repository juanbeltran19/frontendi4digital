export class Logs {
    idTransaccionUsuario: number;
    resultado: string;
    fecha: string;
    servicio: string;

    constructor(idTransaccionUsuario: number, resultado: string, fecha:string, servicio:string){
        this.idTransaccionUsuario = idTransaccionUsuario;
        this.resultado = resultado;
        this.fecha = fecha;
        this.servicio = servicio;
    }

}
