import { Routes } from '@angular/router';
import { ToastGuard } from './guards/toast.guard';
import { NotFoundComponent } from './not-found';
import { applicationRoutes } from './modules/application/application.routes';
import { appRoutes } from './modules/application/app.routes';
import { startRoutes } from './modules/start/start.routes';

export const rootRoutes: Routes = [
  {
    path: '',
    children: startRoutes,
    canActivate: [ToastGuard],
  },
  {
    path: 'map',
    children: applicationRoutes,
    canActivate: [ToastGuard],
  },
  {
    path: 'app',
    children: appRoutes,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
