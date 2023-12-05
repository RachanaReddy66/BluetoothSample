import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pairedDevices: any[] = [];

  constructor(private bluetoothSerial: BluetoothSerial, private alertController: AlertController) {}

  getPairedDevices() {
    this.bluetoothSerial.list().then(
      (devices) => {
        this.pairedDevices = devices;
        this.showAlert('Paired Devices', this.formatDeviceList(devices));
      },
      (error) => {
        console.error('Error getting paired devices', error);
        this.showAlert('Error', 'Failed to get paired devices.');
      }
    );
  }

  formatDeviceList(devices: any[]): string {
    if (devices.length === 0) {
      return 'No paired devices found.';
    }

    return devices.map(device => `${device.name} - ${device.address}`).join('\n');
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
