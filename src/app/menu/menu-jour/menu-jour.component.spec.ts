import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuJourComponent } from './menu-jour.component';

describe('MenuJourComponent', () => {
  let component: MenuJourComponent;
  let fixture: ComponentFixture<MenuJourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuJourComponent]
    });
    fixture = TestBed.createComponent(MenuJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
