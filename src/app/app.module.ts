import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { ProductFilterPipe } from './common/pipes/product-filter.pipe';
import { ActivityTypeComponent } from './activity-type/activity-type.component';
import { PhonePipe } from './common/pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ActivityCardComponent,
    ProductFilterPipe,
    ActivityTypeComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
