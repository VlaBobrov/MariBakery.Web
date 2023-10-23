import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleHeaderComponent } from './circle-header.component';

describe('CircleHeaderComponent', () => {
  let component: CircleHeaderComponent;
  let fixture: ComponentFixture<CircleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
