import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ContactService: ContactsService) { }
  contacts: IContact[] = [];

  ngOnInit(): void {
    this.listarTodosContact();
  }

  listarTodosContact(){
    this.ContactService.listarTodosContact().subscribe((result: IContact[]) => {
      this.contacts = result;
    });
  }

  confirmar(id: number){
    Swal.fire({
      title: 'Você está certo disso?',
      text: "Tem certeza que deseja remover este contato?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#30B5d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ContactService.remover(id).subscribe(result => {
          Swal.fire({
            title: 'Operação Finalizada!',
            text: "Cliente removido com sucesso",
            icon: 'success',
          });
          this.listarTodosContact();
        }, error => {
          console.error(error);
        });
      }
    })
  }
}
