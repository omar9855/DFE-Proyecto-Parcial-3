import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { ProductComponent } from './product/product.component';
import { CrudService } from 'src/app/shared/services/crud-service.service';
import { ModalComponent } from '../../shared/modal/modal.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CatalogsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[
    CrudService
  ],
  exports:[
    CatalogsComponent
  ]
})
export class CatalogsModule { }
