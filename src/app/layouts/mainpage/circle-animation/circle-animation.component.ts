import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-circle-animation',
  templateUrl: './circle-animation.component.html',
  styleUrls: ['./circle-animation.component.scss']
})
export class CircleAnimationComponent  implements OnInit {

  public circe1ImagePath = new String(imagePath.imagePath+'cake1.png'); 
  public circe2ImagePath = new String(imagePath.imagePath+'cake2.png'); 
  public circe3ImagePath = new String(imagePath.imagePath+'cake3.png'); 
  public circe4ImagePath = new String(imagePath.imagePath+'cake4.png'); 
  public vectorImagePath = new String(imagePath.imagePath+'Vector.svg'); 
  
  public arrowRImagePath = new String(imagePath.imagePath+'arrow-left.svg'); 
  public arrowLImagePath = new String(imagePath.imagePath+'arrow-right.svg'); 
  public galeryImagePath = new String(imagePath.imagePath+'all-galery-button.png'); 

  currentImageIndex = 0;
  rotationAngle = 0;
  slideAmount = 0; // Initial slide amount

  imagePaths: String[] =  [
    this.circe1ImagePath,
    this.circe2ImagePath,
    this.circe3ImagePath,
    this.circe4ImagePath
  ];
  
  getAnimationStyle(index: number): any {
    if (index === this.currentImageIndex) {
      return { animation: 'none' };
    } else {
      return {};
    }
  }

  ngOnInit(): void  {

  }
  
  get currentImagePath(): String {
    return this.imagePaths[this.currentImageIndex];
  }

  onArrowLeftClick(): void {
    this.rotateImage(360); // Rotate counterclockwise by 360 degrees
    this.currentImageIndex =
    (this.currentImageIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
  }
  
  onArrowRightClick(): void {

    this.rotateImage(-360); // Rotate clockwise by 360 degrees
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
  }
  
  rotateImage(angle: number): void {
    this.rotationAngle += angle; // Adjust the rotation angle
  }
}
