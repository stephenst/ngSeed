import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-multiline',
  templateUrl: './multiline.component.html',
  styleUrls: ['./multiline.component.scss']
})
export class MultilineComponent implements OnInit {
    temperatures: Array<{id: string, values: Array<any>}> = [
        {
            'id': 'New York',
            'values': [
                {'date': new Date('2011-10-01'), 'temperature': 63.4},
                {'date': new Date('2011-10-02'), 'temperature': 58.0},
                {'date': new Date('2011-10-03'), 'temperature': 53.3},
                {'date': new Date('2011-10-04'), 'temperature': 55.7},
                {'date': new Date('2011-10-05'), 'temperature': 64.2},
                {'date': new Date('2011-10-06'), 'temperature': 58.8},
                {'date': new Date('2011-10-07'), 'temperature': 57.9},
                {'date': new Date('2011-10-08'), 'temperature': 61.8},
                {'date': new Date('2011-10-09'), 'temperature': 69.3},
                {'date': new Date('2011-10-10'), 'temperature': 71.2},
                {'date': new Date('2011-10-11'), 'temperature': 68.7},
                {'date': new Date('2011-10-12'), 'temperature': 61.8},
                {'date': new Date('2011-10-13'), 'temperature': 63.0},
                {'date': new Date('2011-10-14'), 'temperature': 66.9},
                {'date': new Date('2011-10-15'), 'temperature': 61.7},
                {'date': new Date('2011-10-16'), 'temperature': 61.8},
                {'date': new Date('2011-10-17'), 'temperature': 62.8},
                {'date': new Date('2011-10-18'), 'temperature': 60.8},
                {'date': new Date('2011-10-19'), 'temperature': 62.1},
                {'date': new Date('2011-10-20'), 'temperature': 65.1},
                {'date': new Date('2011-10-21'), 'temperature': 55.6},
                {'date': new Date('2011-10-22'), 'temperature': 54.4},
                {'date': new Date('2011-10-23'), 'temperature': 54.4},
                {'date': new Date('2011-10-24'), 'temperature': 54.8},
                {'date': new Date('2011-10-25'), 'temperature': 57.9},
                {'date': new Date('2011-10-26'), 'temperature': 54.6},
                {'date': new Date('2011-10-27'), 'temperature': 54.4},
                {'date': new Date('2011-10-28'), 'temperature': 42.5},
                {'date': new Date('2011-10-29'), 'temperature': 40.9},
                {'date': new Date('2011-10-30'), 'temperature': 38.6},
                {'date': new Date('2011-10-31'), 'temperature': 44.2},
                {'date': new Date('2011-11-01'), 'temperature': 49.6},
                {'date': new Date('2011-11-02'), 'temperature': 47.2},
                {'date': new Date('2011-11-03'), 'temperature': 50.1},
                {'date': new Date('2011-11-04'), 'temperature': 50.1},
                {'date': new Date('2011-11-05'), 'temperature': 43.5},
                {'date': new Date('2011-11-06'), 'temperature': 43.8},
                {'date': new Date('2011-11-07'), 'temperature': 48.9},
                {'date': new Date('2011-11-08'), 'temperature': 55.5},
                {'date': new Date('2011-11-09'), 'temperature': 53.7},
                {'date': new Date('2011-11-10'), 'temperature': 57.7},
                {'date': new Date('2011-11-11'), 'temperature': 48.5}
            ]
        },
        {
            'id': 'San Francisco',
            'values': [
                {'date': new Date('2011-10-01'), 'temperature': 62.7},
                {'date': new Date('2011-10-02'), 'temperature': 59.9},
                {'date': new Date('2011-10-03'), 'temperature': 59.1},
                {'date': new Date('2011-10-04'), 'temperature': 58.8},
                {'date': new Date('2011-10-05'), 'temperature': 58.7},
                {'date': new Date('2011-10-06'), 'temperature': 57.0},
                {'date': new Date('2011-10-07'), 'temperature': 56.7},
                {'date': new Date('2011-10-08'), 'temperature': 56.8},
                {'date': new Date('2011-10-09'), 'temperature': 56.7},
                {'date': new Date('2011-10-10'), 'temperature': 60.1},
                {'date': new Date('2011-10-11'), 'temperature': 61.1},
                {'date': new Date('2011-10-12'), 'temperature': 61.5},
                {'date': new Date('2011-10-13'), 'temperature': 64.3},
                {'date': new Date('2011-10-14'), 'temperature': 67.1},
                {'date': new Date('2011-10-15'), 'temperature': 64.6},
                {'date': new Date('2011-10-16'), 'temperature': 61.6},
                {'date': new Date('2011-10-17'), 'temperature': 61.1},
                {'date': new Date('2011-10-18'), 'temperature': 59.2},
                {'date': new Date('2011-10-19'), 'temperature': 58.9},
                {'date': new Date('2011-10-20'), 'temperature': 57.2},
                {'date': new Date('2011-10-21'), 'temperature': 56.4},
                {'date': new Date('2011-10-22'), 'temperature': 60.7},
                {'date': new Date('2011-10-23'), 'temperature': 65.1},
                {'date': new Date('2011-10-24'), 'temperature': 60.9},
                {'date': new Date('2011-10-25'), 'temperature': 56.1},
                {'date': new Date('2011-10-26'), 'temperature': 54.6},
                {'date': new Date('2011-10-27'), 'temperature': 56.1},
                {'date': new Date('2011-10-28'), 'temperature': 58.1},
                {'date': new Date('2011-10-29'), 'temperature': 57.5},
                {'date': new Date('2011-10-30'), 'temperature': 57.7},
                {'date': new Date('2011-10-31'), 'temperature': 55.1},
                {'date': new Date('2011-11-01'), 'temperature': 57.9},
                {'date': new Date('2011-11-02'), 'temperature': 64.6},
                {'date': new Date('2011-11-03'), 'temperature': 56.2},
                {'date': new Date('2011-11-04'), 'temperature': 50.5},
                {'date': new Date('2011-11-05'), 'temperature': 51.3},
                {'date': new Date('2011-11-06'), 'temperature': 52.6},
                {'date': new Date('2011-11-07'), 'temperature': 51.4},
                {'date': new Date('2011-11-08'), 'temperature': 50.6},
                {'date': new Date('2011-11-09'), 'temperature': 54.6},
                {'date': new Date('2011-11-10'), 'temperature': 55.6},
                {'date': new Date('2011-11-11'), 'temperature': 53.9}
            ]
        },
        {
            'id': 'Austin',
            'values': [
                {'date': new Date('2011-10-01'), 'temperature': 72.2},
                {'date': new Date('2011-10-02'), 'temperature': 67.7},
                {'date': new Date('2011-10-03'), 'temperature': 69.4},
                {'date': new Date('2011-10-04'), 'temperature': 68.0},
                {'date': new Date('2011-10-05'), 'temperature': 72.4},
                {'date': new Date('2011-10-06'), 'temperature': 77.0},
                {'date': new Date('2011-10-07'), 'temperature': 82.3},
                {'date': new Date('2011-10-08'), 'temperature': 78.9},
                {'date': new Date('2011-10-09'), 'temperature': 68.8},
                {'date': new Date('2011-10-10'), 'temperature': 68.7},
                {'date': new Date('2011-10-11'), 'temperature': 70.3},
                {'date': new Date('2011-10-12'), 'temperature': 75.3},
                {'date': new Date('2011-10-13'), 'temperature': 76.6},
                {'date': new Date('2011-10-14'), 'temperature': 66.6},
                {'date': new Date('2011-10-15'), 'temperature': 68.0},
                {'date': new Date('2011-10-16'), 'temperature': 70.6},
                {'date': new Date('2011-10-17'), 'temperature': 71.1},
                {'date': new Date('2011-10-18'), 'temperature': 70.0},
                {'date': new Date('2011-10-19'), 'temperature': 61.6},
                {'date': new Date('2011-10-20'), 'temperature': 57.4},
                {'date': new Date('2011-10-21'), 'temperature': 64.3},
                {'date': new Date('2011-10-22'), 'temperature': 72.4},
                {'date': new Date('2011-10-23'), 'temperature': 72.4},
                {'date': new Date('2011-10-24'), 'temperature': 72.5},
                {'date': new Date('2011-10-25'), 'temperature': 72.7},
                {'date': new Date('2011-10-26'), 'temperature': 73.4},
                {'date': new Date('2011-10-27'), 'temperature': 70.7},
                {'date': new Date('2011-10-28'), 'temperature': 56.8},
                {'date': new Date('2011-10-29'), 'temperature': 51.0},
                {'date': new Date('2011-10-30'), 'temperature': 54.9},
                {'date': new Date('2011-10-31'), 'temperature': 58.8},
                {'date': new Date('2011-11-01'), 'temperature': 62.6},
                {'date': new Date('2011-11-02'), 'temperature': 71.0},
                {'date': new Date('2011-11-03'), 'temperature': 58.4},
                {'date': new Date('2011-11-04'), 'temperature': 45.1},
                {'date': new Date('2011-11-05'), 'temperature': 52.2},
                {'date': new Date('2011-11-06'), 'temperature': 73.0},
                {'date': new Date('2011-11-07'), 'temperature': 75.4},
                {'date': new Date('2011-11-08'), 'temperature': 72.1},
                {'date': new Date('2011-11-09'), 'temperature': 56.6},
                {'date': new Date('2011-11-10'), 'temperature': 55.4},
                {'date': new Date('2011-11-11'), 'temperature': 46.7}
            ]
        },
    ];

    title: string = 'D3.js with Angular 2!';
    subtitle: string = 'Multi-Series Line Chart';

    data: any;

    svg: any;
    margin = {top: 20, right: 80, bottom: 30, left: 50};
    g: any;
    width: number;
    height: number;
    x;
    y;
    z;
    line;

    constructor() {

    }

    ngOnInit() {
        this.data = this.temperatures.map((v) => v.values.map((v) => v.date ))[0];
        //.reduce((a, b) => a.concat(b), []);

        this.initChart();
        this.drawAxis();
        this.drawPath();
    }

    private initChart(): void {
        this.svg = d3.select('svg#multiLineD3');

        this.width = this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = this.svg.attr('height') - this.margin.top - this.margin.bottom;

        this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        this.x = d3Scale.scaleTime().range([0, this.width]);
        this.y = d3Scale.scaleLinear().range([this.height, 0]);
        this.z = d3Scale.scaleOrdinal(d3Scale.schemeCategory10);

        this.line = d3Shape.line()
            .curve(d3Shape.curveBasis)
            .x( (d: any) => this.x(d.date) )
            .y( (d: any) => this.y(d.temperature) );

        this.x.domain(d3Array.extent(this.data, (d: Date) => d ));

        this.y.domain([
            d3Array.min(this.temperatures, function(c) { return d3Array.min(c.values, function(d) { return d.temperature; }); }),
            d3Array.max(this.temperatures, function(c) { return d3Array.max(c.values, function(d) { return d.temperature; }); })
        ]);

        this.z.domain(this.temperatures.map(function(c) { return c.id; }));
    }

    private drawAxis(): void {
        this.g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3Axis.axisBottom(this.x));

        this.g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3Axis.axisLeft(this.y))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('fill', '#000')
            .text('Temperature, ºF');
    }

    private drawPath(): void {
        let city = this.g.selectAll('.city')
            .data(this.temperatures)
            .enter().append('g')
            .attr('class', 'city');

        city.append('path')
            .attr('class', 'line')
            .attr('d', (d) => this.line(d.values) )
            .style('stroke', (d) => this.z(d.id) );

        city.append('text')
            .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
            .attr('transform', (d) => 'translate(' + this.x(d.value.date) + ',' + this.y(d.value.temperature) + ')' )
            .attr('x', 3)
            .attr('dy', '0.35em')
            .style('font', '10px sans-serif')
            .text(function(d) { return d.id; });
    }

}
