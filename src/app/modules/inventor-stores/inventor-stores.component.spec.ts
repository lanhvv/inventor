import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorStoresComponent } from './inventor-stores.component';

describe('InventorStoresComponent', () => {
  let component: InventorStoresComponent;
  let fixture: ComponentFixture<InventorStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorStoresComponent]
    });
    fixture = TestBed.createComponent(InventorStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
