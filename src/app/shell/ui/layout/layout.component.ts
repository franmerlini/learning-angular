import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header></app-header>

      <main class="flex-grow flex justify-center py-8">
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class LayoutComponent {}
