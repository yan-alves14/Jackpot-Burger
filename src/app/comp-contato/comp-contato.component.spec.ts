import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompContatoComponent } from './comp-contato.component';

describe('CompContatoComponent', () => {
  let component: CompContatoComponent;
  let fixture: ComponentFixture<CompContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompContatoComponent]
    });
    fixture = TestBed.createComponent(CompContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
