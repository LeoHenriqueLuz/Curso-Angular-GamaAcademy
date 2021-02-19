import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaInesistenteComponent } from './rota-inesistente.component';

describe('RotaInesistenteComponent', () => {
  let component: RotaInesistenteComponent;
  let fixture: ComponentFixture<RotaInesistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaInesistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaInesistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
