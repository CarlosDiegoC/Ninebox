import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const ENDPOINT = 'https://apim-shoescompany-0001.azure-api.net/census/api/Census';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: string

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.http.get(ENDPOINT)
    .subscribe(product => {
      this.product = JSON.stringify(product);
      });
  }

}
