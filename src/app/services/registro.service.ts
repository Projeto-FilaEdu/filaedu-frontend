import { inject, Injectable } from '@angular/core';
import { Registro } from '../models/registro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovimentoHora } from '../models/movimentoHora';
import { PicoDia } from '../models/picoDia';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/registros";

  constructor() { }

  findAll(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.API + '/findAll');
  }

  movimentoSemana() {
    return this.http.get<any>(this.API + '/movimento-semana');
  }

  movimentoHora(): Observable<MovimentoHora[]> {
    return this.http.get<MovimentoHora[]>(this.API + '/movimento-hora');
  }

  getPicoDia() {
    return this.http.get<PicoDia>(this.API + '/pico-dia');
  }

  getTotalHoje(): Observable<number> {
    return this.http.get<number>(this.API + '/total-hoje');
  }

  getHojeVsOntem(): Observable<number> {
  return this.http.get<number>(this.API + '/hoje-vs-ontem');
}

}
