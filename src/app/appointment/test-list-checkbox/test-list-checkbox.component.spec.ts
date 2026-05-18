import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListCheckboxComponent } from './test-list-checkbox.component';

describe('TestListCheckboxComponent', () => {
  let component: TestListCheckboxComponent;
  let fixture: ComponentFixture<TestListCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestListCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
