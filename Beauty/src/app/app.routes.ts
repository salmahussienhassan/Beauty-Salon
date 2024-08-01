import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'layout/home', pathMatch: "full" },
    {path:'home',component:HomeComponent},
];
