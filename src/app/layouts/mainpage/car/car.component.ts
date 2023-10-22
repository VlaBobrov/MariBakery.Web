import { Component, OnInit, ElementRef  } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit  {
  public carImagePath = new String(imagePath.imagePath + 'car.png');
  slideIn = false;
  slideOut = false;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        this.slideIn = true;
        this.slideOut = false;
      } else {
        this.slideIn = false;
        this.slideOut = true;
      }
    });

    // Observe when the element enters or exits the viewport
    observer.observe(this.elementRef.nativeElement);
  }
  scrollToTargetComponent() {
    const targetElement = document.getElementById('contact-component');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
