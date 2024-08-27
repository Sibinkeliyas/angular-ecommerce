import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComComponent } from './shop-com.component';

describe('ShopComComponent', () => {
  let component: ShopComComponent;
  let fixture: ComponentFixture<ShopComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
