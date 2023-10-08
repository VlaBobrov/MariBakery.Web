import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-box-of-best-taste',
  templateUrl: './box-of-best-taste.component.html',
  styleUrls: ['./box-of-best-taste.component.scss']
})
export class BoxOfBestTasteComponent implements OnInit{
   
  public tasteImagePath = new String(imagePath.imagePath+'1.png');   
  
  ngOnInit(): void  {

  }
}
