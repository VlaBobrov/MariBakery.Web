import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent  implements OnInit {
  public contactFormImagePath = new String(imagePath.imagePath+'1-2.png');   
  
  ngOnInit(): void  {

  }
}
