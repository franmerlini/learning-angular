import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';

import { HomeComponent } from './feature';
import { HomeRoutingModule } from './home-routing.module';
import { ChipSetComponent } from './ui';

const containers = [HomeComponent];

const components = [ChipSetComponent];

@NgModule({
  declarations: [...containers, ...components],
  imports: [CommonModule, HomeRoutingModule, MatChipsModule],
})
export class HomeModule {}
