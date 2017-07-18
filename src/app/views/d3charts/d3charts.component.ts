import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import * as d3 from 'd3';

@Component({
    selector: 'app-d3charts',
    templateUrl: './d3charts.component.html',
    animations: [routerTransition()]
})


export class D3chartsComponent implements OnInit {
    constructor(public router: Router) { }

    public data: Array<any> = [];

    ngOnInit() {
        this.data = [];
        for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
            this.data.push([
                `Index ${i}`,
                Math.floor(Math.random() * 100)
            ]);
        }
    }
}
