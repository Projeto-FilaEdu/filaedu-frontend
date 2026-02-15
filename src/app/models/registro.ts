export class Registro {

    id!: number;
    lojaId!: number;
    dataHora!: Date;
    totalAcumulado!: number;

    constructor( id: number, lojaId: number, dataHora: Date, totalAcumulado: number){
        this.id = id;
        this.lojaId = lojaId;
        this.dataHora = dataHora;
        this.totalAcumulado = totalAcumulado;
    }
}
