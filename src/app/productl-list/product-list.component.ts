import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import { ProductService } from './product.service';
@Component({
    selector:'product-list',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css','./product-list1.component.css']

})

export class ProductListComponent implements OnInit{
    pageTitle: String = 'Product List';
    showImage: boolean = false;
    width:number =150;
    erroMsg: string;
    // filterString: string ='';
    filterProducts: IProduct[];
    products: IProduct[];
    _filterString: string ='';
    get filterString(): string{
          return this._filterString;
    }
    set filterString(value: string){
            this._filterString=value;
            this.filterProducts = this.filterString ? this.filteredRecords(this.filterString): this.products;
    }
    constructor(private productService: ProductService){
    
    }
    
    toggleImage():void{
         this.showImage =!this.showImage;
    }

    filteredRecords(find: string): IProduct[]{
        find.toLocaleLowerCase();
        return this.products.filter((products: IProduct)=>{
         return products.productName.toLocaleLowerCase().indexOf(find) !== -1 }  ); 
    }
    ratingClicked(m: string){
         this.pageTitle='Product-List'+m;
    }
    ngOnInit(): void{
        this.productService.getProducts().subscribe({
            next: product => {this.products=product;
                this.filterProducts=this.products;},
            error: e => this.erroMsg =e
        });
        
    }
}