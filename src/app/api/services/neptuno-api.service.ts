/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Pedido } from '../models/pedido';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class NeptunoApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiNeptunoApiGet
   */
  static readonly ApiNeptunoApiGetPath = '/api/NeptunoAPI';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNeptunoApiGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Producto>>> {

    const rb = new RequestBuilder(this.rootUrl, NeptunoApiService.ApiNeptunoApiGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Producto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNeptunoApiGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiGet$Plain(params?: {
  }): Observable<Array<Producto>> {

    return this.apiNeptunoApiGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Producto>>) => r.body as Array<Producto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNeptunoApiGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Producto>>> {

    const rb = new RequestBuilder(this.rootUrl, NeptunoApiService.ApiNeptunoApiGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Producto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNeptunoApiGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiGet$Json(params?: {
  }): Observable<Array<Producto>> {

    return this.apiNeptunoApiGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Producto>>) => r.body as Array<Producto>)
    );
  }

  /**
   * Path part for operation apiNeptunoApiIdGet
   */
  static readonly ApiNeptunoApiIdGetPath = '/api/NeptunoAPI/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNeptunoApiIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Producto>>> {

    const rb = new RequestBuilder(this.rootUrl, NeptunoApiService.ApiNeptunoApiIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Producto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNeptunoApiIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiIdGet$Plain(params: {
    id: number;
  }): Observable<Array<Producto>> {

    return this.apiNeptunoApiIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Producto>>) => r.body as Array<Producto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNeptunoApiIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Producto>>> {

    const rb = new RequestBuilder(this.rootUrl, NeptunoApiService.ApiNeptunoApiIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Producto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNeptunoApiIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiIdGet$Json(params: {
    id: number;
  }): Observable<Array<Producto>> {

    return this.apiNeptunoApiIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Producto>>) => r.body as Array<Producto>)
    );
  }

  /**
   * Path part for operation apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet
   */
  static readonly ApiNeptunoApiGetPedidosClienteAnioCodcliAnioGetPath = '/api/NeptunoAPI/GetPedidosClienteAnio/{codcli}/{anio}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Plain$Response(params: {
    codcli: string;
    anio: number;
  }): Observable<StrictHttpResponse<Array<Pedido>>> {

    const rb = new RequestBuilder(this.rootUrl, NeptunoApiService.ApiNeptunoApiGetPedidosClienteAnioCodcliAnioGetPath, 'get');
    if (params) {
      rb.path('codcli', params.codcli, {});
      rb.path('anio', params.anio, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Pedido>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Plain(params: {
    codcli: string;
    anio: number;
  }): Observable<Array<Pedido>> {

    return this.apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Pedido>>) => r.body as Array<Pedido>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Json$Response(params: {
    codcli: string;
    anio: number;
  }): Observable<StrictHttpResponse<Array<Pedido>>> {

    const rb = new RequestBuilder(this.rootUrl, NeptunoApiService.ApiNeptunoApiGetPedidosClienteAnioCodcliAnioGetPath, 'get');
    if (params) {
      rb.path('codcli', params.codcli, {});
      rb.path('anio', params.anio, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Pedido>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Json(params: {
    codcli: string;
    anio: number;
  }): Observable<Array<Pedido>> {

    return this.apiNeptunoApiGetPedidosClienteAnioCodcliAnioGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Pedido>>) => r.body as Array<Pedido>)
    );
  }

}
