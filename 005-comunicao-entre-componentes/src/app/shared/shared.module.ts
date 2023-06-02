import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { OutputComponentComponent } from './output-component/output-component.component';

@NgModule({
  declarations: [
    TitleComponent,
    InputComponentComponent,
    OutputComponentComponent,
  ],
  imports: [CommonModule],
  exports: [TitleComponent, InputComponentComponent, OutputComponentComponent],
})
export class SharedModule {}
