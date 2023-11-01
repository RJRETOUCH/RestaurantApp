import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  // get all records
  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:3000/Restaurants");
  }

  // Add records
  create(payload: Restaurant): Observable<Restaurant[]> {
    return this.http.post<Restaurant[]>("http://localhost:3000/Restaurants", payload)
  }

  // get records by id
  getbyId(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`http://localhost:3000/Restaurants/${id}`);
  }

  // Update Records
  update(payload: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`http://localhost:3000/Restaurants/${payload.id}`, payload);
  }

  // Delete records
  delete(id: number) {
    return this.http.delete(`http://localhost:3000/Restaurants/${id}`)
  }
}
