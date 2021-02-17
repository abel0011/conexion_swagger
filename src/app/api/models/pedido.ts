/* tslint:disable */
/* eslint-disable */
import { Cliente } from './cliente';
import { DetallesPedido } from './detalles-pedido';
import { Empleado } from './empleado';
export interface Pedido {
  cargo?: null | number;
  ciudadDestinatario?: null | string;
  codPostalDestinatario?: null | string;
  destinatario?: null | string;
  detallesPedidos?: null | Array<DetallesPedido>;
  direccionDestinatario?: null | string;
  eliminado?: null | number;
  fechaEntrega?: null | string;
  fechaEnvio?: null | string;
  fechaPedido?: null | string;
  formaEnvio?: null | number;
  idCliente?: null | string;
  idClienteNavigation?: Cliente;
  idEmpleado?: null | number;
  idEmpleadoNavigation?: Empleado;
  idPedido?: number;
  paisDestinatario?: null | string;
  regionDestinatario?: null | string;
}
