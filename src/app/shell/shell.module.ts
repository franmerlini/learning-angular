import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShellRoutingModule } from './shell-routing.module';
import { LayoutModule } from './ui/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ShellRoutingModule, LayoutModule],
  exports: [ShellRoutingModule],
})
export class ShellModule {}
