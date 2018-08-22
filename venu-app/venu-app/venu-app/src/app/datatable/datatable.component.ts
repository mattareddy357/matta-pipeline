import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { DatatableService } from './services/datatable.service';

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css'],
    providers: [DatatableService]
})
export class DatatableComponent implements OnInit {
    start: any;
    end: any;
    nextBtn: any;
    prevBtn: Boolean;
    firstCol: Number;
    lastCol: Number;
    weeks: String[];
    griddata: any;
    constructor(private datatableService: DatatableService; private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {
        this.start = 0;
        this.end = 5;
        this.prevBtn = true;
        this.firstCol = this.start + 2;
        this.lastCol = this.end + 2;
        this.weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'];
        this.serviceData();
    }
    serviceData() {
        this.datatableService.gridData().subscribe(
            data => { this.griddata = data; },
            err => console.error(err),
            () => console.log('done loading')
        );
        this.changeDetector.detectChanges();
    }

    onPrevBtn() {
        this.start -= 1;
        this.end = this.start + 5;
        this.prevBtn = (this.start === 0) ? true : false;
        this.nextBtn = (this.end > this.weeks.length - 1) ? true : false;
        this.firstCol = this.start + 2;
        this.lastCol = this.end + 2;
    }
    onNextBtn() {
        this.start += 1;
        this.end = this.start + 5;
        this.prevBtn = (this.start === 0) ? true : false;
        this.nextBtn = (this.end > this.weeks.length - 1) ? true : false;
        this.firstCol = this.start + 2;
        this.lastCol = this.end + 2;
    }

    firstBtn() {

    }
    lastBtn() {

    }
}
