import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularCommonsModule } from '../layout/angular-commons/angular-commons.module';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { RegularComponent } from './regular/regular.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    RegularComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AngularCommonsModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
