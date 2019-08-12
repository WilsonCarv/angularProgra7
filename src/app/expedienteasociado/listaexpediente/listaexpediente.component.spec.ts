import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaexpedienteComponent } from './listaexpediente.component';

describe('ListaexpedienteComponent', () => {
  let component: ListaexpedienteComponent;
  let fixture: ComponentFixture<ListaexpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaexpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
