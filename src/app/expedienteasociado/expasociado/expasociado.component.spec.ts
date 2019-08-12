import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpasociadoComponent } from './expasociado.component';

describe('ExpasociadoComponent', () => {
  let component: ExpasociadoComponent;
  let fixture: ComponentFixture<ExpasociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpasociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpasociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
