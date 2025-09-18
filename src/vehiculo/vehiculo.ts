import EstadoVehiculo from "./estadoVehiculo";

export default abstract class Vehiculo {
    private matricula: string
    public estadoVehiculo: EstadoVehiculo

    constructor(){
        this.matricula = "";
        this. estadoVehiculo = new EstadoVehiculo();
    }

    public setMatricula(value: string):void {
        this.matricula = value;
    }
    public getMatricula():string {
        return this.matricula;
    }
}