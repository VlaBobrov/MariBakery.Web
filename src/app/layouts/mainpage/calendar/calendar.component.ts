import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{
  
  public calendar1ImagePath = new String(imagePath.imagePath+'image 1.svg');  
  public calendar2ImagePath = new String(imagePath.imagePath+'image 2.svg');  
  public calendar3ImagePath = new String(imagePath.imagePath+'image 3.svg');  
  public calendar4ImagePath = new String(imagePath.imagePath+'image 4.svg');  
  
  ngOnInit(): void  {

  }
}
