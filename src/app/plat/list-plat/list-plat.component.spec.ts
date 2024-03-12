import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlatComponent } from './list-plat.component';

describe('ListPlatComponent', () => {
  let component: ListPlatComponent;
  let fixture: ComponentFixture<ListPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPlatComponent]
    });
    fixture = TestBed.createComponent(ListPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
