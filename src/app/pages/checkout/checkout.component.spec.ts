import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComComponent } from './checkout.component';

describe('CheckoutComComponent', () => {
  let component: CheckoutComComponent;
  let fixture: ComponentFixture<CheckoutComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
