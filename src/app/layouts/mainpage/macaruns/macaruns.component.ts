import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-macaruns',
  templateUrl: './macaruns.component.html',
  styleUrls: ['./macaruns.component.scss']
})
export class MacarunsComponent  implements OnInit  {
  public macaroon1ImagePath = new String(imagePath.imagePath+'macaroon1.png');  
  public macaroon2ImagePath = new String(imagePath.imagePath+'macaroon2.png');   
  public macaroon3ImagePath = new String(imagePath.imagePath+'macaroon3.png');   
  public macaroon4ImagePath = new String(imagePath.imagePath+'macaroon4.png');   
  public macaroon5ImagePath = new String(imagePath.imagePath+'macaroon5.png');   
  public macaroon6ImagePath = new String(imagePath.imagePath+'macaroon6.png');   
  public macaroon7ImagePath = new String(imagePath.imagePath+'macaroon7.png');   
  public macaroon8ImagePath = new String(imagePath.imagePath+'macaroon8.png');   
  public macaroon9ImagePath = new String(imagePath.imagePath+'macaroon9.png');   
  public macaroon10ImagePath = new String(imagePath.imagePath+'macaroon10.png');   
    
  imagePaths = [
    this.macaroon1ImagePath,
    this.macaroon2ImagePath,
    this.macaroon3ImagePath,
    this.macaroon4ImagePath,
    this.macaroon5ImagePath,
    this.macaroon6ImagePath,
    this.macaroon7ImagePath,
    this.macaroon8ImagePath,
    this.macaroon9ImagePath,
    this.macaroon10ImagePath
  ];
  textDescriptions: string[] = [
    'Троянда',
    'Манго',
    'Фісташка',
    'Манго',
    'Капучіно',
    'Маракуйя',
    'Ваніль',
    'Дор Блю',
    'Карамель',
    'Персик'
  ];
  isBlurred: boolean[] = Array(this.imagePaths.length).fill(false);

  toggleText(index: number) {
    this.isBlurred[index] = !this.isBlurred[index];
  }

  ngOnInit(): void  {

  }
}
