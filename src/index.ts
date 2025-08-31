// Gestionar Vehículos: Existen tres categorías principales: Compacto, Sedán y SUV. Cada
// vehículo tiene un número de matrícula, un estado (Disponible, En Alquiler, En
// Mantenimiento, Necesita Limpieza) y una lógica de tarifa específica.
// Gestión de Clientes y Reservas: Un cliente puede crear una reserva para un vehículo
// específico, indicando la fecha de inicio y fin. El sistema debe validar la disponibilidad del
// vehículo para las fechas solicitadas.
// Cálculo de Tarifas:
// Compacto: Tarifa base de $30 por día. Aplica un cargo de $0.15 por cada kilómetro
// recorrido si se superan los 100 km por día de alquiler.
// Sedán: Tarifa base de $50 por día. Aplica un cargo de $0.20 por cada kilómetro
// recorrido, sin límite diario.
// SUV: Tarifa base de $80 por día. Aplica un cargo fijo adicional de $15 por día por
// concepto de seguro y un cargo de $0.25 por cada kilómetro recorrido si se superan
// los 500km en total durante el período de alquiler.
// Gestión de Kilometraje: cada vez que un cliente entrega el vehículo, se debe tomar nota
// del kilometraje de manera tal que se pueda calcular los cargos adicionales
// correspondientes.
// Mantenimiento de Vehículos: El sistema debe poder registrar el costo y la fecha de los
// mantenimientos de cada vehículo.