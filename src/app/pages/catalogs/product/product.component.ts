import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ProductInterface,
} from '../../sales/product-list/interfaces/product-list.interface';
import { CrudService } from 'src/app/shared/services/crud-service.service';
import { SaleInterface } from '../../sales/product-list/interfaces/sale.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() products!: ProductInterface[];
  @Output('saleAdded') saleAdded: EventEmitter<any> = new EventEmitter();
  constructor(private crudService: CrudService) {}



  comprar(e: any): void {
    const id: string = e.target.id;
    const product: ProductInterface = this.products.find(
      (product) => product.id === id
    )!;

    const newVenta: SaleInterface = {
      idProducto: +id,
      cantidad: 1,
      precio: `$${product.precio}`,
      fecha: new Date().toISOString().substring(0, 10),
    };

    console.log(newVenta);
    this.crudService
      .postData<SaleInterface>('sold', newVenta)
      .subscribe((res) => {
        console.log(`Posted data: ${res}`);
        this.saleAdded.emit();
      });
  }
}
