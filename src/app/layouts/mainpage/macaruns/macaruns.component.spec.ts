import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacarunsComponent } from './macaruns.component';

describe('MacarunsComponent', () => {
  let component: MacarunsComponent;
  let fixture: ComponentFixture<MacarunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacarunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacarunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
