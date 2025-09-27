import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// FontAwesome
import { importProvidersFrom } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faLink,
  faHeart,
  faHandHoldingHeart,
  faCloud,
  faStar,
  faMicrochip,
  faCalendarDays,
  faUtensils,
  faGlobe,
  faGift,
  faCamera,
  faMicrophone,
  faHouse,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FontAwesomeModule),
    {
      provide: FaIconLibrary,
      useFactory: () => {
        const library = new FaIconLibrary();
        library.addIcons(
          faLink,
          faHeart,
          faHandHoldingHeart,
          faCloud,
          faStar,
          faMicrochip,
          faCalendarDays,
          faUtensils,
          faGlobe,
          faGift,
          faCamera,
          faMicrophone,
          faHouse,
          faStore,
        );
        return library;
      },
    },
  ],
};
