import { ENVIRONMENT_INITIALIZER } from '@angular/core';
import { Routes } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [
      LoaderService,
      {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        console.log('ENVIRONMENT_INITIALIZER in routes');
      },
      multi: true,
    }]
  },
];
