import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuevoHeroeComponent } from './nuevo-heroe.component';

describe('NuevoHeroeComponent', () => {
  let component: NuevoHeroeComponent;
  let fixture: ComponentFixture<NuevoHeroeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
