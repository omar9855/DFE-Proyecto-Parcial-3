import { Component } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud-service.service';
import { ProductInterface } from '../../sales/product-list/interfaces/product-list.interface';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss'],
})
export class CatalogsComponent {
  constructor(private crudService: CrudService) {}
  products: ProductInterface[] = [];
  hasSend: boolean = false;
  timeout: any;

  ngOnInit() {
    this.crudService.getAll<ProductInterface[]>('games').subscribe((res) => {
      this.products = this.shuffleArray(res); 

      console.log(this.products);
    });
  }

  saleAdded() {
    this.hasSend = true;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.hasSend = false;
    }, 3000);
  }

  private shuffleArray(array: ProductInterface[]): ProductInterface[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
