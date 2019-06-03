import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [ 
  {path: 'pokemon', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
<<<<<<< HEAD
  
=======
>>>>>>> 48527521e7c4266ec5376e972c66e51b00f70c14
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
