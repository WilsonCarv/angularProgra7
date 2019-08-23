import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirexpedienteComponent } from './compartirexpediente.component';

describe('CompartirexpedienteComponent', () => {
  let component: CompartirexpedienteComponent;
  let fixture: ComponentFixture<CompartirexpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirexpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartirexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
