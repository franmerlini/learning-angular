import { Component, Input } from '@angular/core';

import { Chip } from '../../feature';

@Component({
  selector: 'app-chip-set',
  template: `
    <mat-chip-set>
      <mat-chip *ngFor="let chip of chips; trackBy: trackByFn">
        <img matChipAvatar [src]="chip.image" [alt]="chip.label + ' logo'" />
        {{ chip.label }}
      </mat-chip>
    </mat-chip-set>
  `,
})
export class ChipSetComponent {
  @Input() chips: Chip[] = [];

  trackByFn(_: number, chip: Chip): number {
    return chip.id;
  }
}
