import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorHomeComponent } from './inventor-home.component';

describe('InventorHomeComponent', () => {
  let component: InventorHomeComponent;
  let fixture: ComponentFixture<InventorHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorHomeComponent]
    });
    fixture = TestBed.createComponent(InventorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
