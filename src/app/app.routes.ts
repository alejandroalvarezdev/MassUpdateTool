import { Routes } from '@angular/router';
import { SinglePostComponent } from './solutions/single-update/single-post.component';
import { CustomUpdateComponent } from './solutions/custom-update/custom-update.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'MassUpdate', component: CustomUpdateComponent },
    { path: 'SingleUpdate', component: SinglePostComponent },  // Nueva ruta
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
  ];
  
