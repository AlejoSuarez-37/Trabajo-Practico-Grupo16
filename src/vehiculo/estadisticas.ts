export default class Estadisticas {
    private alquileres: number = 0;
    private rentabilidad: number = 0;

    public sumarAlquiler():void {
        this.alquileres++;
    }
    public getAlquileres():number {
        return this.alquileres;
    }
    public sumarRentabilidad(n: number):void {
        this.rentabilidad += n;
    }
    public restarRentabilidad(n: number):void {
        this.rentabilidad -= n;
    }
    public getRentabilidad():number {
        return this.rentabilidad;
    }
}