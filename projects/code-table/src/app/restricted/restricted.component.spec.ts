import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedComponent } from './restricted.component';

describe('RestrictedComponent', () => {
  let component: RestrictedComponent;
  let fixture: ComponentFixture<RestrictedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestrictedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
