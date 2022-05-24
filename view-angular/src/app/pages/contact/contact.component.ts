import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

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

}
