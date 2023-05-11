  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Warehouse } from "app/Model/Warehouse";

  @Injectable({
    providedIn: 'root'
  })
  export class WarehouseService {
    private baseUrl = 'http://localhost:8084/warehouses';

    constructor(private http: HttpClient) { }

    getAllWarehouses(): Observable<Warehouse[]> {
      return this.http.get<Warehouse[]>(this.baseUrl);
    }
    getAllWarehouseNames(): Observable<string[]> {
      const url = `${this.baseUrl}/names`;
      return this.http.get<string[]>(url);
    }
    

    getWarehouseById(id: number): Observable<Warehouse> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Warehouse>(url);
    }

    createWarehouse(warehouse: Warehouse): Observable<Warehouse> {
      return this.http.post<Warehouse>(this.baseUrl, warehouse);
    }

    updateWarehouse(id: number, warehouse: Warehouse): Observable<Warehouse> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.put<Warehouse>(url, warehouse);
    }

    deleteWarehouse(id: number): Observable<any> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete(url);
    }
  }
