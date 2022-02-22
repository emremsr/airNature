import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SingleMenuComponent } from './single-menu/single-menu.component';

const routes: Routes = [

  {path : '' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'menu' , component : MenuComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'menu/:id' , component : SingleMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
