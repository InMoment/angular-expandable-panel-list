import './assets/scss/demo.scss';
import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoAppModule } from './app/demo-app.module';

platformBrowserDynamic().bootstrapModule(DemoAppModule);
