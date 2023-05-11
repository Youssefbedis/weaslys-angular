import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../Model/Store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private baseUrl = 'http://localhost:8084/stores';

  constructor(private http: HttpClient) { }

  getAllStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.baseUrl);
  }

  getStoreById(storeId: number): Observable<Store> {
    const url = `${this.baseUrl}/${storeId}`;
    return this.http.get<Store>(url);
  }

  createStore(store: Store): Observable<Store> {
    return this.http.post<Store>(this.baseUrl, store);
  }

  updateStore(storeId: number, store: Store): Observable<Store> {
    const url = `${this.baseUrl}/${storeId}`;
    return this.http.put<Store>(url, store);
  }

  deleteStore(storeId: number): Observable<any> {
    const url = `${this.baseUrl}/${storeId}`;
    return this.http.delete(url);
  }
}
