
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IContact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  api = environment.api;
  endpoint = 'contacts';

  constructor(private http: HttpClient) { }

  listarTodosContact(){
    return this.http.get<IContact[]>(`${this.api}/${this.endpoint}/`);
  }

  remover(id:number){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }
}
