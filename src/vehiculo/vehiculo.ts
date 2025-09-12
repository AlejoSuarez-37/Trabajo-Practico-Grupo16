import EstadoVehiculo from "./estadoVehiculo";

export default abstract class Vehiculo {
    private matricula: string
    private estadoVehiculo: EstadoVehiculo = new EstadoVehiculo();

    constructor(matricula: string){
        this.matricula = matricula;
    }

    public getMatricula():string {
        return this.matricula;
    }
    public getEstadoVehiculo():EstadoVehiculo {
        return this.estadoVehiculo;
    }
    public abstract obtenerTarifa(dias: number, kilometros: number): number
}