///<reference path="../../services/qrcode.d.ts"/>

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-generateqrcode',
  templateUrl: 'generateqrcode.html',
})
export class GenerateqrcodePage {

  text_in;//输入的文本内容


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  convert() {
    if (this.text_in == null || (typeof this.text_in) == 'undefined') {
      alert("您输入的文本无效，请重新输入！");
      return;
    }
    //var qrcode_c = document.getElementById("qrcode");//获取生成二维码的节点;
    console.log(document.getElementById("qrcode"));
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: 'your content',
      width: 100,
      height: 100,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
    qrcode.makeCode(this.text_in);
  }

  reset() {
    this.text_in = null;
    while (document.getElementById("qrcode").hasChildNodes()) {
      document.getElementById("qrcode").removeChild(document.getElementById("qrcode").lastChild);
    }
  }
}
