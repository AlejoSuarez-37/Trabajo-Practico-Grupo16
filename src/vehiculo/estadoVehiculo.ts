export default class EstadoVehiculo {
    private enReserva: boolean
    private necesitaMantenimiento: boolean
    private necesitaLimpieza: boolean

    constructor(){
        this.enReserva = false;
        this.necesitaMantenimiento = false;
        this.necesitaLimpieza = false;
    }
    public esReservable():boolean {
        if (!this.getEnReserva() && !this.getNecesitaMantenimiento() && !this.getNecesitaLimpieza()){
            return true;
        }
        else{
            return false;
        }
    }
    public setEnReserva(value: boolean):void {
        this.enReserva = value;
    }
    public getEnReserva():boolean {
        return this.enReserva;
    }
    public setNecesitaMantenimiento(value: boolean):void {
        this.necesitaMantenimiento = value;
    }
    public getNecesitaMantenimiento():boolean {
        return this.necesitaMantenimiento;
    }
    public setNecesitaLimpieza(value: boolean):void {
        this.necesitaLimpieza = value;
    }
    public getNecesitaLimpieza():boolean {
        return this.necesitaLimpieza;
    }
}