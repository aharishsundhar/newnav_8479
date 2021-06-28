import { Component, OnInit } from '@angular/core';
import { NavsideService } from './navside.service';

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.scss'],
})

export class NavsideComponent implements OnInit {
    public test = {
        name: '',
    }

    constructor (
        private navsideService: NavsideService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.navsideService.GpCreate(this.test).subscribe(data => {
            this.test.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}