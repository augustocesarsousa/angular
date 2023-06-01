import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { InputComponentComponent } from './input-component/input-component.component';

@NgModule({
  declarations: [TitleComponent, InputComponentComponent],
  imports: [CommonModule],
  exports: [TitleComponent, InputComponentComponent],
})
export class SharedModule {}
