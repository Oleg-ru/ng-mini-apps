import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  private activeRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      alert(id);
    });
  }
}
