export class RegistroMantenimiento {
  constructor(
    public id: string,
    public idVehiculo: string,
    public fecha: Date,
    public costo: number
  ) {}
}
