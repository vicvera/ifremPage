import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularCommonsModule } from '../layout/angular-commons/angular-commons.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AngularCommonsModule
  ],
  exports: [
    ToolbarComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
