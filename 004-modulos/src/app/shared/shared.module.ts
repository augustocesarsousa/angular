import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ModulosComponent } from './modulos/modulos.component';

@NgModule({
  declarations: [TitleComponent, ModulosComponent],
  imports: [CommonModule],
  exports: [TitleComponent, ModulosComponent],
})
export class SharedModule {}
