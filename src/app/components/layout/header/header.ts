import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { navigationItems } from '../../../routes';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  navigationItems = navigationItems;
}