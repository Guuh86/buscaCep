import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepMapComponent } from './cep-map.component';

describe('CepMapComponent', () => {
  let component: CepMapComponent;
  let fixture: ComponentFixture<CepMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
