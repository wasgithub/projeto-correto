import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    ContactsComponent,
    WeatherComponent,
  ],
})
export class DashboardModule { }
