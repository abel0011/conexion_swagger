/* tslint:disable */
/* eslint-disable */
import { Pedido } from './pedido';
export interface Cliente {
  cargoContacto?: null | string;
  ciudad?: null | string;
  codPostal?: null | string;
  direccion?: null | string;
  eliminado?: null | number;
  fax?: null | string;
  idCliente?: null | string;
  nombreCliente?: null | string;
  nombreContacto?: null | string;
  pais?: null | string;
  pedidos?: null | Array<Pedido>;
  region?: null | string;
  telefono?: null | string;
}
