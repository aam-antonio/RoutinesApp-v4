import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentsModule} from './components/components.module';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    ComponentsModule
  ]
})
export class SharedModule { }
