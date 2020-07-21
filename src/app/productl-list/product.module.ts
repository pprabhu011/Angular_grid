import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { AddSpace } from 'src/shared/addspace.pipe';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductGuardGuard } from '../product-detail/product-guard.guard';
import { SharedModule } from 'src/shared/star-component/shared.module';



@NgModule({
  declarations: [ProductListComponent,AddSpace,ProductDetailComponent],
  imports: [
    RouterModule.forChild([
      {path:'product',component: ProductListComponent},
        {path:'product/:id',
        canActivate:[ProductGuardGuard]
        ,component: ProductDetailComponent},
    ]),
    SharedModule
  ]

})
export class ProductModule { }
