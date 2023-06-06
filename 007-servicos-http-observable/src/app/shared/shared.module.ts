import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TitleComponent, FoodListComponent],
  imports: [CommonModule, FormsModule],
  exports: [TitleComponent, FoodListComponent],
})
export class SharedModule {}
