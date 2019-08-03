import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaalergiaFrecComponent } from './listaalergia-frec.component';

describe('ListaalergiaFrecComponent', () => {
  let component: ListaalergiaFrecComponent;
  let fixture: ComponentFixture<ListaalergiaFrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaalergiaFrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaalergiaFrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
