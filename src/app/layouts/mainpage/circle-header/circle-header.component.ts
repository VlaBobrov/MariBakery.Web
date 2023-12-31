import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-circle-header',
  templateUrl: './circle-header.component.html',
  styleUrls: ['./circle-header.component.scss'],
})
export class CircleHeaderComponent implements OnInit {
  public headerInstaImagePath = new String(
    imagePath.imagePath + 'instagram-2-1.svg'
  );
  public headerHeartImagePath = new String(
    imagePath.imagePath + 'vector-4.svg'
  );
  public logoMainImagePath = new String(imagePath.imagePath + 'logo-main.png');
  public wavesImagePath = new String(imagePath.imagePath + 'wave.svg');
  public logoMainLayoutImagePath = new String(
    imagePath.imagePath + 'logo-main-layout.png'
  );
  public circe1ImagePath = new String(imagePath.imagePath + 'cake1.png');
  public circe2ImagePath = new String(imagePath.imagePath + 'cake2.png');
  public circe3ImagePath = new String(imagePath.imagePath + 'cake3.png');
  public circe4ImagePath = new String(imagePath.imagePath + 'cake4.png');
  public vectorImagePath = new String(imagePath.imagePath + 'Vector.svg');

  public arrowRImagePath = new String(imagePath.imagePath + 'arrow-left.svg');
  public arrowLImagePath = new String(imagePath.imagePath + 'arrow-right.svg');
  public galeryImagePath = new String(
    imagePath.imagePath + 'all-galery-button.png'
  );

  currentImageIndex = 0;
  rotationAngle = 0;
  slideAmount = 0; // Initial slide amount

  imagePaths: String[] = [
    this.circe1ImagePath,
    this.circe2ImagePath,
    this.circe3ImagePath,
    this.circe4ImagePath,
  ];
  isDesktop = false;

  getAnimationStyle(index: number): any {
    if (index === this.currentImageIndex) {
      return { animation: 'none' };
    } else {
      return {};
    }
  }

  getDevice() {
    const regex_mobile = new RegExp(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/,
      'i'
    );
    this.isDesktop = !regex_mobile.test(window.navigator.userAgent);
  }

  get currentImagePath(): String {
    return this.imagePaths[this.currentImageIndex];
  }


  onArrowLeftClick(): void {
    this.rotateImage(-360); // Rotate counterclockwise by 360 degrees
    setTimeout(() => {
    
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.imagePaths.length) %
        this.imagePaths.length;
    }, 300);
  }

  onArrowRightClick(): void {
    this.rotateImage(360); // Rotate clockwise by 360 degrees
    setTimeout(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imagePaths.length;
    }, 300);
  }

  rotateImage(angle: number): void {
    this.rotationAngle += angle; // Adjust the rotation angle
  }

  @ViewChild('heart', { static: true })
  heart!: ElementRef;

  constructor(private renderer: Renderer2) {}

  addHeart() {
    // Create a new <div> element
    const newElement = this.renderer.createElement('div');

    // Set some attributes or styles for the new element if needed
    this.renderer.addClass(newElement, 'assort');
    this.renderer.setStyle(newElement, 'src', '{{ headerHeartImagePath }}');

    // Set the inner text or HTML content of the new element
    newElement.innerHTML = 'New Element Added';

    // Append the new element to the container
    this.renderer.appendChild(this.heart.nativeElement, newElement);
  }
  ngOnInit(): void {
    this.getDevice();
  }

  scrollToCircleComponent() {
    const targetElement = document.getElementById('circle-component');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToMacarunsComponent() {
    const targetElement = document.getElementById('makaruns-component');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToAboutUsComponent() {
    const targetElement = document.getElementById('aboutUs-component');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContactFromComponent() {
    const targetElement = document.getElementById('contact-component');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
