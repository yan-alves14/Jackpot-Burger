import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCassinosComponent } from './comp-cassinos.component';

describe('CompCassinosComponent', () => {
  let component: CompCassinosComponent;
  let fixture: ComponentFixture<CompCassinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompCassinosComponent]
    });
    fixture = TestBed.createComponent(CompCassinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
