import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchupdatetestComponent } from './searchupdatetest.component';

describe('SearchupdatetestComponent', () => {
  let component: SearchupdatetestComponent;
  let fixture: ComponentFixture<SearchupdatetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchupdatetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchupdatetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});