/* tslint:disable */
/* eslint-disable */
import { Producto } from './producto';
export interface Categoria {
  descripcion?: null | string;
  idCategoria?: number;
  nombreCategoria?: null | string;
  productos?: null | Array<Producto>;
}
