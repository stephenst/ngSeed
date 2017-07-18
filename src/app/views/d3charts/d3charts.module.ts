import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3chartsComponent } from './d3charts.component';
import { D3chartsRoutingModule } from './d3charts-routing.module';
import { PageHeaderModule } from '../../shared';
import { BarChartComponent } from './barchart/barchart.component';
import { MultilineComponent } from './multiline/multiline.component';

@NgModule({
    imports: [
        CommonModule,
        D3chartsRoutingModule,
        PageHeaderModule
    ],
    declarations: [
        D3chartsComponent,
        BarChartComponent,
        MultilineComponent
    ]
})
export class D3chartsModule {
}
