import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthHeadersService {

  constructor() { }
  getAuthHeaders() {
    const headers = new HttpHeaders()
  
      .set('Access-Control-Allow-Origin', '*');

    return headers;
  }
}
