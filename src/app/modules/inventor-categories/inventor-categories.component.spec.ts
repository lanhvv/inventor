import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorCategoriesComponent } from './inventor-categories.component';

describe('InventorCategoriesComponent', () => {
  let component: InventorCategoriesComponent;
  let fixture: ComponentFixture<InventorCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorCategoriesComponent]
    });
    fixture = TestBed.createComponent(InventorCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
