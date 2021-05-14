import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleHeroeComponent } from './detalle-heroe.component';

describe('DetalleHeroeComponent', () => {
  let component: DetalleHeroeComponent;
  let fixture: ComponentFixture<DetalleHeroeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
