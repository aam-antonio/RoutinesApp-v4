import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentsModule} from './components/components.module';

@NgModule({
  exports: [
    TranslateModule,
    ComponentsModule
  ]
})
export class SharedModule { }
