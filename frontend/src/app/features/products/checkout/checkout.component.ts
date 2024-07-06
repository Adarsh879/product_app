import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  product?: any ;

  constructor(private httpClient: HttpClient,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    var productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    this.httpClient.get(`http://localhost:3000/products/get/${productId}`).subscribe((response: any) => {
      console.log(response);
      this.product = response;
      console.log(this.product);
    });
  }
}
