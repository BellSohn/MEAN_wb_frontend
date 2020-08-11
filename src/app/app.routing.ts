import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import {AboutComponent } from './components/about/about.component';
import {BarComponent} from './components/bar/bar.component';
import {ErrorComponent} from './components/error/error.component';
import {CreateComponent} from './components/create/create.component';
import {WebComponent} from './components/web/web.component';
import {DetailComponent} from './components/detail/detail.component';
import {SearchComponent} from './components/search/search.component';



const Approutes:Routes=[
{path:'',component:AboutComponent},
{path:'about',component:AboutComponent},
{path:'bars',component:BarComponent},
{path:'create',component:CreateComponent},
{path:'detail/:id',component:DetailComponent},
{path:'web',component:WebComponent},
{path:'search',component:SearchComponent},
{path:'**',component:ErrorComponent}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(Approutes);