import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChefComponent } from './list-chef.component';

describe('ListChefComponent', () => {
  let component: ListChefComponent;
  let fixture: ComponentFixture<ListChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChefComponent]
    });
    fixture = TestBed.createComponent(ListChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
