import {
  enableProdMode,
  ENVIRONMENT_INITIALIZER,
  importProvidersFrom,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'home',
  //   loadComponent: () =>
  //     import('./app/home/home.component').then((m) => m.HomeComponent),
  // },
  {
    path: 'home',
    loadChildren: () => import('./app/home/home.routes').then((m) => m.routes)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

// platformBrowserDynamic().bootstrapModule(AppModule)
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, { useHash: true })),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        console.log('ENVIRONMENT_INITIALIZER in main ts');
      },
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
