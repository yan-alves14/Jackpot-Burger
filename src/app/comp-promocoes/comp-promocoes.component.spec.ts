import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPromocoesComponent } from './comp-promocoes.component';

describe('CompPromocoesComponent', () => {
  let component: CompPromocoesComponent;
  let fixture: ComponentFixture<CompPromocoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompPromocoesComponent]
    });
    fixture = TestBed.createComponent(CompPromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
