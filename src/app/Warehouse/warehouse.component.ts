import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'app/Model/Warehouse';
import { WarehouseService } from 'app/service/warehouse.service';
import { Router } from '@angular/router';
import { QRCodeGeneratorService } from '../service/QRCodeGeneratorService';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
  
})
export class WarehouseComponent implements OnInit {
  warehouses!: Warehouse[];
  selectedWarehouse: Warehouse;

  constructor(private warehouseService: WarehouseService,private router: Router,
    private qrCodeGenerator: QRCodeGeneratorService
    )
   { }

  ngOnInit() {
     
    this.warehouseService.getAllWarehouses()
      .subscribe(warehouses => this.warehouses = warehouses);
  }
  updateWarehouse(id: number): void {
    this.router.navigate(['/update-warehouse', id]);
  }
  sortWarehouses() {
    this.warehouses.sort((a, b) => a.capacity - b.capacity);
  }
  qrCodeData: string;

  async generateQRCode() {
    // get the text to generate QR code for, e.g. warehouse data
    const warehouseData = 'Warehouse Data';

    // generate QR code image data
    this.qrCodeData = await this.qrCodeGenerator.generateQRCode(warehouseData);
  }
  

  deleteWarehouse(id: number): void {
    this.warehouseService.deleteWarehouse(id)
      .subscribe(() => {
        // remove the deleted warehouse from the list
        this.warehouses = this.warehouses.filter(w => w.warehouseId !== id);
      });
  }
}
