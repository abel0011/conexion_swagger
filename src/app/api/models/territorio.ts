/* tslint:disable */
/* eslint-disable */
import { EmpleadosTerritorio } from './empleados-territorio';
import { Region } from './region';
export interface Territorio {
  descripcion?: null | string;
  empleadosTerritorios?: null | Array<EmpleadosTerritorio>;
  idRegion?: number;
  idRegionNavigation?: Region;
  idTerritorio?: null | string;
}
