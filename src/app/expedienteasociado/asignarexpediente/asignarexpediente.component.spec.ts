import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarexpedienteComponent } from './asignarexpediente.component';

describe('AsignarexpedienteComponent', () => {
  let component: AsignarexpedienteComponent;
  let fixture: ComponentFixture<AsignarexpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarexpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
