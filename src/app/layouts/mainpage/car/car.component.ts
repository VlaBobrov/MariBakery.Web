import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit{
  public carImagePath = new String(imagePath.imagePath+'car.png');   

  ngOnInit(): void  {

  }
}
