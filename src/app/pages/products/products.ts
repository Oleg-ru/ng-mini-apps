import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  private router = inject(Router);
  private activatedRouter = inject(ActivatedRoute);

  //pasting Route Parameters using navigate
  // viewDetails(id: number) {
  //   this.router.navigate(['/pages/product-details', id])
  // }

  // Reading Query parameters using RouterLink
  // ngOnInit() {
  //   this.activatedRouter.queryParamMap.subscribe((params) => {
  //     const category = params.get('category');
  //     const sort = params.get('sort');
  //     console.log(category);
  //     console.log(sort);
  //   });
  // }

  viewDetails(category: string) {
    this.router.navigate(['/pages/products'], {
      queryParams: {
        category: category,
      },
    });
    console.log(category);
  }
}
