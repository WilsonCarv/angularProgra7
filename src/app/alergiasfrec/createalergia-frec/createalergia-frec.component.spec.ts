import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatealergiaFrecComponent } from './createalergia-frec.component';

describe('CreatealergiaFrecComponent', () => {
  let component: CreatealergiaFrecComponent;
  let fixture: ComponentFixture<CreatealergiaFrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatealergiaFrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatealergiaFrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
