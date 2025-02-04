import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes'; // Importa las rutas

export const appConfig: ApplicationConfig = {
  providers: [
    // Configura Zone.js para mejorar el rendimiento
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Configura el enrutador con las rutas definidas
    provideRouter(routes),

    // Habilita la hidratación en el lado del cliente (útil para SSR)
    provideClientHydration(withEventReplay())
  ]
};