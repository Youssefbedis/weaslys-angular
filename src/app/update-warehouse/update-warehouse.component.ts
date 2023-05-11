import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Warehouse } from 'app/Model/Warehouse';
import { WarehouseService } from 'app/service/warehouse.service';

@Component({
  selector: 'app-update-warehouse',
  templateUrl: './update-warehouse.component.html',
  styleUrls: ['./update-warehouse.component.scss']
})
export class UpdateWarehouseComponent implements OnInit {
  warehouse: Warehouse;

  constructor(
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getWarehouse();
  }

  getWarehouse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.warehouseService.getWarehouseById(id)
      .subscribe(warehouse => this.warehouse = warehouse);
  }

  updateWarehouse(): void {
    this.warehouseService.updateWarehouse(this.warehouse.warehouseId, this.warehouse)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
  this.location.back();
}
}
