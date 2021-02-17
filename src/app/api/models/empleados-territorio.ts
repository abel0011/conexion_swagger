/* tslint:disable */
/* eslint-disable */
import { Empleado } from './empleado';
import { Territorio } from './territorio';
export interface EmpleadosTerritorio {
  idEmpleado?: number;
  idEmpleadoNavigation?: Empleado;
  idTerritorio?: null | string;
  idTerritorioNavigation?: Territorio;
}
