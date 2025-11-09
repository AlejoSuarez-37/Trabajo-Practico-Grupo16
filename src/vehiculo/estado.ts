export default class Estado {
    private kilometrosRecorridos: number = 0;
    private ultimoMantenimeinto: Date = new Date();
    private alquileresCompletados: number = 0;
    private necesitaLimpieza: boolean = false;

    public sumarKilometrosRecorridos(n:number):void {
        this.kilometrosRecorridos += n;
    }
    public setUltimoMantenimeinto(d:Date):void {
        this.ultimoMantenimeinto = d;
    }
    public aumentarAlquileresCompletados():void {
        this.alquileresCompletados++;
    }
    public getNecesitaLimpieza():boolean {
        return this.necesitaLimpieza;
    }
    public setNecesitaLimpieza(value:boolean):void {
        this.necesitaLimpieza = value;
    }

    public necesitaMantenimiento(dF:Date):boolean {
        let value:boolean = false
        const dI = this.ultimoMantenimeinto;
        const diferenciaMeses = (dF.getFullYear()-dI.getFullYear()) * 12 + (dF.getMonth()-dI.getMonth());
        if (this.kilometrosRecorridos > 10000 ||
            this.alquileresCompletados >= 5 ||
            diferenciaMeses > 12){
            value = true;
        }
        return value;
    }
}