import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root' // Garante que o serviço está disponível em toda a aplicação
})
export class HttpRequestsService {
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(`${environment.APIURL}/${url}`);
  }
}
