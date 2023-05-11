import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class QRCodeGeneratorService {

  constructor() { }

  async generateQRCode(text: string): Promise<string> {
    try {
      return await QRCode.toDataURL(text);
    } catch (err) {
      console.error('Error while generating QR code:', err);
      return '';
    }
  }

}
