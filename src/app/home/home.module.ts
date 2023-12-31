import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [
    // Add BluetoothSerial to the providers array
    BluetoothSerial,
    // ... other providers
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
