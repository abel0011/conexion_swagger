/* tslint:disable */
/* eslint-disable */
import { Categoria } from './categoria';
import { DetallesPedido } from './detalles-pedido';
import { Proveedore } from './proveedore';
export interface Producto {
  cantidadPorUnidad?: null | string;
  detallesPedidos?: null | Array<DetallesPedido>;
  idCategoria?: null | number;
  idCategoriaNavigation?: Categoria;
  idProducto?: number;
  idProveedor?: null | number;
  idProveedorNavigation?: Proveedore;
  nivelNuevoPedido?: null | number;
  nombreProducto?: null | string;
  precioUnidad?: null | number;
  suspendido?: boolean;
  unidadesEnExistencia?: null | number;
  unidadesEnPedido?: null | number;
}
