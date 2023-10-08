import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent  implements OnInit {
  
  public footerImagePath = new String(imagePath.imagePath+'group-3183.png');

  constructor() {}

  ngOnInit(): void  {

  }
}
