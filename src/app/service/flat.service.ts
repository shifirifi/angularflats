import { Injectable } from '@angular/core';
import { Flat } from '../models/flat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:51123/';
  addFlat(flat: Flat) {
    return this.http.post(`${this.baseUrl}/flat/AddFlat`, flat);
}
editFlat(flat: Flat) {
  return this.http.post(`${this.baseUrl}/flat/editFlat`, flat);
}
}
