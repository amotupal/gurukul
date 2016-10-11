import { Route } from '@angular/router';
import { HomeComponent } from './index';

import { CommentsRoutes } from '../comments/index';
export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  ...CommentsRoutes
];
