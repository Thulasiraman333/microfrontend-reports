import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  billingData: any;
  ngOnInit(): void {
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
