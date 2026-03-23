import {Routes} from '@angular/router';
import { AppRoute } from './interfaces/app-route';
import { NavigationItem } from './interfaces/navigation-item';

import {Home} from './pages/home/home';
import {Details} from './pages/details/details';
import { Projects } from './pages/projects/projects';
import { Agents } from './pages/agents/agents';

export const appRoutes: AppRoute[] = [
  {
    path: '',
    component: Home,
    title: 'Home page',
    navLabel: 'Home',
    navExact: true,
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects page',
    navLabel: 'Projects',
  },
  {
    path: 'agents',
    component: Agents,
    title: 'Agents page',
    navLabel: 'Agents',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
];

export const navigationItems: NavigationItem[] = appRoutes
  .filter((route) => route.navLabel)
  .map((route) => ({
    label: route.navLabel as string,
    path: route.path === '' ? '/' : `/${route.path}`,
    exact: route.navExact ?? false,
  }));

const routeConfig: Routes = appRoutes;

export default routeConfig;