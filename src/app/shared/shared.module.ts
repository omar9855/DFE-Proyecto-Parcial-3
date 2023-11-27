import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MenuComponent,
    ModalComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  exports:[
    MenuComponent,
    ModalComponent,
    FooterComponent
  ]
})
export class SharedModule { }
