import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateqrcodePage } from './generateqrcode';

@NgModule({
  declarations: [
    GenerateqrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(GenerateqrcodePage),
  ],
})
export class GenerateqrcodePageModule {}
