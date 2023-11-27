import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud-service.service';
import { SaleInterface } from '../product-list/interfaces/sale.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  data!:SaleInterface[];
  productosVendidos!:number;
  precioTotal!:number;
  constructor(
    private crudService: CrudService
  ){

  }

  deleteSale(e:any){
    console.log(e);
    const id:String = e.$event.target.id;
    this.crudService.delete('sold/'+id).subscribe({next:(res)=>{
      this.data = [...this.data.filter(sale => +id!==+sale.id!)];
      console.log(this.data);
      this.saleDeleted();
    }});

    e.cantidadProductosVendido.emit()
  }

  ngOnInit(){
    this.crudService.getAll<SaleInterface[]>('sold').subscribe((res)=>{
      this.data = res;
      console.log(res);
    })
    
    this.cantidadProductosVendido()
  }

  hasDeleted:boolean = false;
  timeout:any;
  saleDeleted(){
    this.hasDeleted = true;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(()=>{
        this.hasDeleted = false
    },3000);
  }

  cantidadProductosVendido(){
    setTimeout(()=>{
      const cantidadVendida = this.data.map(sale=>sale.cantidad);
      const precioVenta = this.data.map(sale=>+sale.precio.split('$')[1]);
      this.productosVendidos=cantidadVendida.reduce((a,b)=>a+b,0);
      this.precioTotal = +precioVenta.reduce((a,b)=>a+b,0).toFixed(2);
      console.log({cantidadVendida,precioVenta});
    },500);
  }
}
