import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorProductsComponent } from './inventor-products.component';

describe('InventorProductsComponent', () => {
  let component: InventorProductsComponent;
  let fixture: ComponentFixture<InventorProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorProductsComponent]
    });
    fixture = TestBed.createComponent(InventorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
