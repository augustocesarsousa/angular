import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [TitleComponent, FoodListComponent, HttpComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [TitleComponent, FoodListComponent, HttpComponent],
})
export class SharedModule {}
