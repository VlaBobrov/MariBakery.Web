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
  
  public arrowLImagePath = new String(imagePath.imagePath+'arrow-left.svg'); 
  public arrowRImagePath = new String(imagePath.imagePath+'arrow-right.svg'); 
  public galeryImagePath = new String(imagePath.imagePath+'all-galery-button.png'); 

  currentImageIndex = 0;

  imagePaths: String[] =  [
    this.circe1ImagePath,
    this.circe2ImagePath,
    this.circe3ImagePath,
    this.circe4ImagePath
  ];
  
  ngOnInit(): void  {

  }
  
  get currentImagePath(): String {
    return this.imagePaths[this.currentImageIndex];
  }

  onArrowLeftClick(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
  }

  onArrowRightClick(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
  }
}

