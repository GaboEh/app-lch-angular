import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'https://railway-production-6d4e.up.railway.app/libros'

  constructor(
    private http: HttpClient
  ) { 
    console.log('servicio libros');
  }

  getBooks(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

  return this.http.get(this.url, {
    headers: header
  });
  }
}
