import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'inicio', component:IndexComponent},
    {path:'about', component:AboutComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];
