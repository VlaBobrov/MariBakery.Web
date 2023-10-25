import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent  implements OnInit {
  
  public footerImagePath = new String(imagePath.imagePath+'group-3183.png');
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void  {
  }
  getInstagramURL(): SafeResourceUrl {
    const url = 'https://instagram.com/mari.bakery.wro?igshid=MzRlODBiNWFlZA==';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
