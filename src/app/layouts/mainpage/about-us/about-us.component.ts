import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public aboutUsImagePath = new String(imagePath.imagePath+'quote-2-1.svg');   
  public aboutUsHeartImagePath = new String(imagePath.imagePath+'about-us-heart.svg'); 
  public aboutUsStrangeMomImagePath = new String(imagePath.imagePath+'strange-mom.png');   
  public aboutUsCircleImagePath = new String(imagePath.imagePath+'about-us-circle.svg');  
  constructor() {}

  ngOnInit(): void  {

  }
}
