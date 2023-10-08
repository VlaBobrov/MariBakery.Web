import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public headerInstaImagePath = new String(imagePath.imagePath+'instagram-2-1.svg');
  public headerHeartImagePath = new String(imagePath.imagePath+'vector-4.svg');
  @ViewChild('heart', { static: true })
  heart!: ElementRef;
  
  constructor(private renderer: Renderer2) {
  }

  addHeart() {
    // Create a new <div> element
    const newElement = this.renderer.createElement('div');

    // Set some attributes or styles for the new element if needed
    this.renderer.addClass(newElement, 'assort');
    this.renderer.setStyle(newElement, 'src', "{{ headerHeartImagePath }}");

    // Set the inner text or HTML content of the new element
    newElement.innerHTML = 'New Element Added';

    // Append the new element to the container
    this.renderer.appendChild(this.heart.nativeElement, newElement);
  }
  ngOnInit(): void  {

  }
}
