import { Component } from '@angular/core';

@Component({
  selector: 'app-style-switcher',
  templateUrl: './style-switcher.component.html',
  styleUrls: ['./style-switcher.component.css']
})
export class StyleSwitcherComponent {
  colors = [
    { name: 'pink', hex: '#ec1839' },
    { name: 'blue', hex: '#2196f3' },
    { name: 'orange', hex: '#fa5b0f' },
    { name: 'yellow', hex: '#ffb400' },
    { name: 'green', hex: '#72b626' }
  ];

  setActiveStyle(color: string) {
    document.documentElement.style.setProperty('--primary-color', color);
  }

  setSkin(skin: string) {
    document.body.classList.toggle('dark', skin === 'dark');
  }

  toggleSwitcher() {
    document.querySelector('.style-switcher')?.classList.toggle('open');
  }
}
