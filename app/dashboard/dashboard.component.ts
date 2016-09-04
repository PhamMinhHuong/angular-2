import { Component, OnChanges, SimpleChange, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { Pair } from './pair';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent implements DoCheck {

	constructor(private router: Router) {}
	queryObj = {};
	@Input() pairs: Pair[] = [
		{
			name: "a",
			value: 9,
			min: 2,
			max: 10
		},{
			name: "b",
			value: 4,
			min: 1,
			max: 9
		},{
			name: "c",
			value: 6,
			min: 0,
			max: 10
		},{
			name: "d",
			value: 8,
			min: 1,
			max: 10
		}
	];
	ngDoCheck() {
		this.queryObj = this.buildParams(this.pairs);
	}
	gotoGraph() {
		this.router.navigate([
			'graph', this.queryObj
		]);
	}
	buildParams(pairs : Pair[]) {

		var queryObj = {};
		pairs.forEach(function (obj, i) {
			let name = obj.name;
			let value = obj.value;
			queryObj[name] = value
			
		});
		return queryObj;
	}
}