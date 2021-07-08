import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {HomeModule} from './home/home.module';
import {ComponentModule} from '../component/component.module';
import {StoreModule} from '@ngrx/store';
import {cartFeature} from '../cart/cart.slice';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    ComponentModule,
    StoreModule.forFeature(cartFeature),
  ]
})
export class PagesModule {
}
