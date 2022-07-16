import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCadastrarEditarComponent } from './pages/contact/contact-cadastrar-editar/contact-cadastrar-editar.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
{ path: 'contact', component: ContactComponent },
{ path: 'contact/cadastrar', component: ContactCadastrarEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
