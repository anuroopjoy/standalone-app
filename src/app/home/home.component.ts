import { CommonModule } from '@angular/common';
import {
  Component,
  createEnvironmentInjector,
  ENVIRONMENT_INITIALIZER,
  OnInit,
} from '@angular/core';
import { LazyLoaderDirective } from '../loader/lazy-loader.directive';
import { Loader } from '../loader/loader.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, LazyLoaderDirective],
})
export class HomeComponent implements OnInit {
  title = 'lazy-load-app';
  showInfo = false;

  // lazyModuleConfig: Loader = {
  //   loader: () => import('../additional-info/additional-info.module'),
  //   module: 'AdditionalInfoModule',
  // };
  lazyModuleConfig: Loader = {
    loader: () => import('../additional-info/additional-info.component'),
    component: 'AdditionalInfoComponent',
  };

  constructor() {
    createEnvironmentInjector([
      {
        provide: ENVIRONMENT_INITIALIZER,
        useValue: () => {
          console.log('ENVIRONMENT_INITIALIZER in home component');
        },
        multi: true,
      },
    ]);
  }

  ngOnInit(): void {}

  showAdditionalInfo() {
    this.showInfo = true;
  }
}
