import { Component, OnInit } from '@angular/core';
import { Store } from '../Model/Store';
import { StoreService } from '../service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  stores: Store[];
   newStore: Store = new Store();
  
  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit() {
    this.storeService.getAllStores()
      .subscribe(stores => this.stores = stores);
  }

  create(): void {
    this.router.navigate(['/add-store']);
  }

  update(storeId: number): void {
    this.router.navigate(['/update-store', storeId]);
  }

  delete(storeId: number): void {
    const store = this.stores.find(s => s.storeId === storeId);
    if (!store) {
      console.error(`Store with ID ${storeId} not found`);
      return;
    }
  
    this.storeService.deleteStore(storeId)
      .subscribe(() => {
        // remove the seleted store from the list
        this.stores = this.stores.filter(s => s.storeId !== storeId);
      });
  }
  
}
