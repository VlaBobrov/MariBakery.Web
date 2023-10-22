import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../constants/my-constants';

@Component({
  selector: 'app-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.scss']
})
export class AssortmentComponent  implements OnInit  {
  public macaroon1ImagePath = new String(imagePath.imagePath+'cake1.png');  
  public macaroon2ImagePath = new String(imagePath.imagePath+'cake2.png');   
  public macaroon3ImagePath = new String(imagePath.imagePath+'cake3.png');   
  public macaroon4ImagePath = new String(imagePath.imagePath+'cake4.png');   
  public macaroon5ImagePath = new String(imagePath.imagePath+'cake1.png');   
  public macaroon6ImagePath = new String(imagePath.imagePath+'cake2.png');   
  public macaroon7ImagePath = new String(imagePath.imagePath+'cake3.png');   
  public macaroon8ImagePath = new String(imagePath.imagePath+'cake4.png');   
  public macaroon9ImagePath = new String(imagePath.imagePath+'cake1.png');   
  public macaroon10ImagePath = new String(imagePath.imagePath+'cake2.png'); 
  currentImage: number = -1; // Initially, no image is hovered
  public defaultImagePath = new String(imagePath.imagePath+'cake-inside.png'); 
  
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
  textName: string[] = [
    'Червоний оксамит',
    'Червоний оксамит ',
    'Червоний оксамит ',
    'Червоний оксамит ',
    'Червоний оксамит',
    'Червоний оксамит ',
    'Червоний оксамит ',
    'Червоний оксамит ',
    'Червоний оксамит ',
    'Червоний оксамит ',
  ];
  textDescriptions: string[] = [
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
    'Червоні шоколадні коржі з шоколадним смаком.Поєднуються з ванільним кремом, на основі вершкового сиру.',
  ];
  textPrice: string[] = [
    '80 zl/кг',
    '80 zl/кг',
    '80 zl/кг',
    '80 zl/кг',
    '80 zl/кг',
    '80 zl/кг',
    '80 zl/кг',
    '80 zl/кг',  
    '80 zl/кг',
    '80 zl/кг', 
  ];
  changeImage(index: number) {
    this.currentImage = index;
  }

  // Function to reset the image when the cursor moves away
  resetImage() {
    this.currentImage = -1;
  }
  ngOnInit(): void  {

  }
}
