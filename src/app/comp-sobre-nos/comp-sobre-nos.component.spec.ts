import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSobreNosComponent } from './comp-sobre-nos.component';

describe('CompSobreNosComponent', () => {
  let component: CompSobreNosComponent;
  let fixture: ComponentFixture<CompSobreNosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompSobreNosComponent]
    });
    fixture = TestBed.createComponent(CompSobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
