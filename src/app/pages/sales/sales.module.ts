import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ParentComponent } from './parent/parent.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    SummaryComponent,
    ProductListComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[ParentComponent]
})
export class SalesModule { }
