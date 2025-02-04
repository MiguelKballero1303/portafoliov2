import { Component } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent {
  images: string[] = [
    'assets/img/image1.jpg',
    'assets/img/image2.jpg',
    'assets/img/image3.jpg'
  ];
  currentIndex: number = 0;
  lightboxImage: string = this.images[this.currentIndex];
  captionText: string = "Image Caption";

  nextItem() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.lightboxImage = this.images[this.currentIndex];
  }

  prevItem() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.lightboxImage = this.images[this.currentIndex];
  }

  closeLightbox() {
    document.querySelector('.lightbox')?.classList.remove('active');
  }
}
