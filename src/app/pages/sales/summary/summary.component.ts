import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SaleInterface } from '../product-list/interfaces/sale.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
  @Input() data!:SaleInterface[];
  @Input() productosVendidos!:number;
  @Input() precioTotal!:number;
  

  ngOnInit(){
    console.log("object");
    
  }
}
