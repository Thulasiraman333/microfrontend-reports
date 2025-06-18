import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  billingData: any;
  router = inject(Router);
  customer: any;
  constructor(private location: Location) { }
  ngOnInit(): void {
    const state = this.location.getState() as { customer?: any };
    if (state?.customer) {
      this.customer = state.customer;
      console.log('✅ Got customer via router state:', this.customer);
    } else {
      console.warn('⚠️ No customer data found in router state.');
    }

    this.billingData = {
      "customerName": "Thulasiraman R",
      "email": "thulasi@example.com",
      "items": [
        {
          "itemName": "USB Cable",
          "quantity": 2,
          "price": 150
        },
        {
          "itemName": "Wireless Mouse",
          "quantity": 1,
          "price": 799
        },
        {
          "itemName": "Laptop Stand",
          "quantity": 1,
          "price": 999
        }
      ],
      "total": 2098
    };
  }
}
