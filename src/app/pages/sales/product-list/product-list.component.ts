import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud-service.service';
import { ProductInterface } from './interfaces/product-list.interface';
import { SaleInterface } from './interfaces/sale.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() data!: SaleInterface[];
  @Output('cantidadProductosVendido')
  cantidadProductosVendido: EventEmitter<any> = new EventEmitter();
  @Output() deleteSale: EventEmitter<any> = new EventEmitter();
  products?: ProductInterface[];
  constructor(private crudService: CrudService) {}
  ngOnInit() {
    this.crudService.getAll<ProductInterface[]>('games').subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }

  getName(id: number, products: ProductInterface[]) {
    return products.find((product) => id === +product.id)?.name;
  }
}
