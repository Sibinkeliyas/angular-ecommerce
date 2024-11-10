import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComComponent } from './sign-up-com.component';

describe('SignUpComComponent', () => {
  let component: SignUpComComponent;
  let fixture: ComponentFixture<SignUpComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
