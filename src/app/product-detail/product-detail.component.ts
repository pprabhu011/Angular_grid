import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productl-list/product.service';
import { IProduct } from '../productl-list/product';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string= 'Product-Detail';
   product: IProduct;

  constructor(private route: ActivatedRoute,private router: Router) {

   }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.pageTitle=id;
  }
  onBack(): void{
    this.router.navigate(['/product']);
  }

}
