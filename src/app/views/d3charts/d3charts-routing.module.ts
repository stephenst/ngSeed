import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D3chartsComponent } from './d3charts.component';

const routes: Routes = [
    { path: '', component: D3chartsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class D3chartsRoutingModule { }
