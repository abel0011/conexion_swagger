/* tslint:disable */
/* eslint-disable */
import { EmpleadosTerritorio } from './empleados-territorio';
import { Pedido } from './pedido';
export interface Empleado {
  apellidos?: null | string;
  cargo?: null | string;
  ciudad?: null | string;
  codPostal?: null | string;
  direccion?: null | string;
  empleadosTerritorios?: null | Array<EmpleadosTerritorio>;
  extension?: null | string;
  fechaContratacion?: null | string;
  fechaNacimiento?: null | string;
  idEmpleado?: number;
  jefe?: null | number;
  nombres?: null | string;
  notas?: null | string;
  pais?: null | string;
  pedidos?: null | Array<Pedido>;
  region?: null | string;
  telDomicilio?: null | string;
  tratamiento?: null | string;
}
