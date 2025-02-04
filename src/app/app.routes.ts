import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { StyleSwitcherComponent } from './components/style-switcher/style-switcher.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'services', component: ServicesComponent, title: 'Services' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'lightbox', component: LightboxComponent, title: 'Lightbox' },
  { path: 'style-switcher', component: StyleSwitcherComponent, title: 'Style Switcher' },
  { path: '**', redirectTo: '' } // Redirige cualquier ruta no válida a Home
];
