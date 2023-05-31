import { Component } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss'],
})
export class ModulosComponent {
  public anatomiaNgModule: string = `
  @NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [],
    bootstrap: [],
  })
  `;
  public criandoModulo: string = `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  
  @NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
  })
  export class SharedModule {}`;
  public declarandoComponentes: string = `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { TitleComponent } from './title/title.component';
  import { ModulosComponent } from './modulos/modulos.component';
  
  @NgModule({
    declarations: [TitleComponent, ModulosComponent],
    imports: [CommonModule],
    exports: [],
  })
  export class SharedModule {}
  `;
  public exportandoComponentes: string = `
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
  `;
  public adicionandoModuloNoAppModulo: string = `
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { SharedModule } from './shared/shared.module';

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  `;
}
