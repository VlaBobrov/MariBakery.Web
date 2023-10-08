import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOfBestTasteComponent } from './box-of-best-taste.component';

describe('BoxOfBestTasteComponent', () => {
  let component: BoxOfBestTasteComponent;
  let fixture: ComponentFixture<BoxOfBestTasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxOfBestTasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxOfBestTasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
