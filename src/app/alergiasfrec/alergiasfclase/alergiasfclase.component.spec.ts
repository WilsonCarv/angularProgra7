import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiasfclaseComponent } from './alergiasfclase.component';

describe('AlergiasfclaseComponent', () => {
  let component: AlergiasfclaseComponent;
  let fixture: ComponentFixture<AlergiasfclaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiasfclaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiasfclaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
