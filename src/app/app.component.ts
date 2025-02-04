import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LightboxComponent } from "./components/lightbox/lightbox.component";
import { StyleSwitcherComponent } from "./components/style-switcher/style-switcher.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LightboxComponent, StyleSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
