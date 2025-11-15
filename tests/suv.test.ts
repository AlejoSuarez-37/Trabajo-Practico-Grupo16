import SUV from "../src/vehiculo/suv"
import Vehiculo from "../src/vehiculo/vehiculo";



describe("SUV", () => {
  test("Se observara si el constructor de SUV crea un SUV es unna instancia de comnpacto", () => {

    const SUVTest = new SUV("AAA111");

    expect(SUVTest).toBeInstanceOf(SUV);

  });
  test("Se obvservara si SUV hereda de vehiculo",()=>{

    const SUVTest = new SUV("AAA111");

    expect(SUVTest).toBeInstanceOf(Vehiculo);

  });
  test("Se observara si la instancia de SUV retorna su matricula",()=>{

    const SUVTest = new SUV("AAA111");

    expect(SUVTest.getMatricula()).toBe("AAA111");

  });
  test("Se observa si el atributo necesitaLimpieza esta en false por defecto",()=>{

    const SUVTest = new SUV("AAA111");

    expect(SUVTest["necesitaLimpieza"]).toEqual(false);
  });
  test("Se obseva si el metodo setNecesitaLimpieza cambia el estado pòr defecto de false a true",()=>{

    const SUVTestDos = new SUV("AAA222");

    SUVTestDos.setNecesitaLimpieza(true);

    expect(SUVTestDos["necesitaLimpieza"]).toEqual(true);
  });
  test("Se obseva si el metodo getNecesitaLimpieza devuelve el estado de necesitaLimpieza",()=>{

    const SUVTestTres = new SUV("AAA333");

    SUVTestTres["necesitaLimpieza"] = false

    expect(SUVTestTres["necesitaLimpieza"]).toEqual(false);
  });
  test("comparamos que la tarifa de mantenimiento sea 30 por dia",()=>{

    const SUVTest = new SUV("AAA111");
    let dias:number = 20
    let tarifaEsperada:number = 600
    expect(SUVTest.obtenerTarifaMantenimiento(dias)).toBe(tarifaEsperada);

  });
  test("comprobamos que la tarifa base con menos de 100km por dia es 15 x dia ",()=>{

    const SUVTest = new SUV("AAA111");
    let dias:number = 20;
    let kilometrosTotales:number = 250;
    let tarifaEsperada:number = 1900;

    expect(SUVTest.obtenerTarifaReserva(dias,kilometrosTotales)).toBe(tarifaEsperada);

  });
    test("comprobamos que la tarifa base con mayor o igual de mas de 500km mas 15 por dia sobre la tarifa base mas 0.25 por km",()=>{

    const SUVTest = new SUV("AAA111");
    let dias:number = 20;
    let kilometrosTotales:number = 3000;
    let tarifaEsperada:number = 2650;

    expect(SUVTest.obtenerTarifaReserva(dias,kilometrosTotales)).toBe(tarifaEsperada);

    kilometrosTotales = 50000;
    tarifaEsperada = 14400;

    expect(SUVTest.obtenerTarifaReserva(dias,kilometrosTotales)).toBe(tarifaEsperada);
  });
});