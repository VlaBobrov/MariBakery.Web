import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-box-of-best-taste',
  templateUrl: './box-of-best-taste.component.html',
  styleUrls: ['./box-of-best-taste.component.scss']
})
export class BoxOfBestTasteComponent implements OnInit{
   
  public tasteImagePath = new String(imagePath.imagePath+'123.png');   
  
  ngOnInit(): void  {

  }
  scrollToTargetComponent() {
    const targetElement = document.getElementById('contact-component');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
