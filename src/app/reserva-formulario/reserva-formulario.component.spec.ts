import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaFormularioComponent } from './reserva-formulario.component';

describe('ReservaFormularioComponent', () => {
  let component: ReservaFormularioComponent;
  let fixture: ComponentFixture<ReservaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
