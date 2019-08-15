import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateexpedienteComponent } from './updateexpediente.component';

describe('UpdateexpedienteComponent', () => {
  let component: UpdateexpedienteComponent;
  let fixture: ComponentFixture<UpdateexpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateexpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
