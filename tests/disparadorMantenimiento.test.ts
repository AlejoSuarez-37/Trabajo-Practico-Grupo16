import DisparadorMantenimeinto from "../src/check/disparadorMantenimiento";
import Garage from "../src/garage";
import Compacto from "../src/vehiculo/compacto";

describe("DisparadorMantenimeinto.chequearEstado", () => {
  const crearFecha = (anio: number, mes: number, dia: number) =>
    new Date(anio, mes - 1, dia);

  test("no agrega mantenimiento ni modifica la rentabilidad si no necesita mantenimiento", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");
    const fecha = crearFecha(2024, 3, 1);

    expect(garage.getMantenimientos().size).toBe(0);
    expect(vehiculo.getEstadisticas().getRentabilidad()).toBe(0);

    DisparadorMantenimeinto.chequearEstado(vehiculo, fecha, garage);

    expect(garage.getMantenimientos().size).toBe(0);
    expect(vehiculo.getEstadisticas().getRentabilidad()).toBe(0);
  });

  test("agrega un mantenimiento y descuenta la rentabilidad cuando necesita mantenimiento", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");
    const fecha = crearFecha(2024, 3, 1);

    vehiculo.getEstado().sumarKilometrosRecorridos(20000);

    DisparadorMantenimeinto.chequearEstado(vehiculo, fecha, garage);

    expect(garage.getMantenimientos().size).toBe(1);

    expect(vehiculo.getEstadisticas().getRentabilidad()).toBe(-1000);
  });
});
