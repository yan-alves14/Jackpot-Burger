import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLocalizacaoComponent } from './comp-localizacao.component';

describe('CompLocalizacaoComponent', () => {
  let component: CompLocalizacaoComponent;
  let fixture: ComponentFixture<CompLocalizacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompLocalizacaoComponent]
    });
    fixture = TestBed.createComponent(CompLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
