import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: ` 
  <main>
      <app-header></app-header>
      <section class="content">
        <router-outlet />
      </section>
    </main> `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
