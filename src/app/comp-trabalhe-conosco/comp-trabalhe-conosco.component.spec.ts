import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTrabalheConoscoComponent } from './comp-trabalhe-conosco.component';

describe('CompTrabalheConoscoComponent', () => {
  let component: CompTrabalheConoscoComponent;
  let fixture: ComponentFixture<CompTrabalheConoscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompTrabalheConoscoComponent]
    });
    fixture = TestBed.createComponent(CompTrabalheConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
