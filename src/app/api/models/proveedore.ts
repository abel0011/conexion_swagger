/* tslint:disable */
/* eslint-disable */
import { Producto } from './producto';
export interface Proveedore {
  cargoContacto?: null | string;
  ciudad?: null | string;
  codPostal?: null | string;
  direccion?: null | string;
  fax?: null | string;
  idProveedor?: number;
  nombreContacto?: null | string;
  nombreProveedor?: null | string;
  paginaPrincipal?: null | string;
  pais?: null | string;
  productos?: null | Array<Producto>;
  region?: null | string;
  telefono?: null | string;
}
