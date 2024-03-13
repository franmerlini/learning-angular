import { Component } from '@angular/core';

export type Chip = {
  id: number;
  image: string;
  label: string;
};

@Component({
  selector: 'app-home',
  template: `
    <div class="flex flex-col items-center gap-16">
      <img src="../../../assets/angular.svg" alt="Angular logo" class="w-52" />

      <div class="flex flex-col gap-4 items-center">
        <h1 class="text-6xl font-bold">Learning Angular</h1>
        <p class="text-xl">A simple application to learn the basics</p>
      </div>

      <div class="flex flex-col gap-2 items-center">
        <p>Created using</p>
        <app-chip-set [chips]="chips"></app-chip-set>
      </div>
    </div>
  `,
})
export class HomeComponent {
  chips: Chip[] = [
    {
      id: 1,
      image: 'assets/angular-material.svg',
      label: 'Angular Material',
    },
    {
      id: 2,
      image: 'assets/angular.svg',
      label: 'Angular',
    },
    {
      id: 3,
      image: 'assets/ngrx.svg',
      label: 'NgRx',
    },
    {
      id: 4,
      image: 'assets/rxjs.svg',
      label: 'RxJs',
    },
    {
      id: 5,
      image: 'assets/tailwindcss.svg',
      label: 'TailwindCSS',
    },
  ];
}
