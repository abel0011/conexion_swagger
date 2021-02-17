/* tslint:disable */
/* eslint-disable */
import { Pedido } from './pedido';
import { Producto } from './producto';
export interface DetallesPedido {
  cantidad?: number;
  descuento?: number;
  eliminado?: null | number;
  idPedido?: number;
  idPedidoNavigation?: Pedido;
  idProducto?: number;
  idProductoNavigation?: Producto;
  precioUnidad?: number;
}
