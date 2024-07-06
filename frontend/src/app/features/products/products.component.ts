import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products?: any[] ;

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/products/getall').subscribe((response: any) => {
      console.log(response);
      this.products = response;
      console.log(this.products);
    });
  }
  }

