import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-big-logo',
  templateUrl: './big-logo.component.html',
  styleUrls: ['./big-logo.component.scss']
})
export class BigLogoComponent implements OnInit {
  public logoMainImagePath = new String(imagePath.imagePath+'logo-main.png');
  public logoMainLayoutImagePath = new String(imagePath.imagePath+'logo-main-layout.png');

  ngOnInit(): void  {

  }
}