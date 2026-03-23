import { Type } from '@angular/core';

export interface AppRoute {
  path: string;
  component: Type<unknown>;
  title?: string;
  navLabel?: string;
  navExact?: boolean;
}
