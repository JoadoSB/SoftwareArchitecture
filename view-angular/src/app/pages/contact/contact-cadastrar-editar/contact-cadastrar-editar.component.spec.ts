import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCadastrarEditarComponent } from './contact-cadastrar-editar.component';

describe('ContactCadastrarEditarComponent', () => {
  let component: ContactCadastrarEditarComponent;
  let fixture: ComponentFixture<ContactCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
