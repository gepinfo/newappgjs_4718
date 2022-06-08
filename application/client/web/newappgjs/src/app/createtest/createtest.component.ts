import { Component, OnInit } from '@angular/core';
import { CreatetestService } from './createtest.service';

@Component({
  selector: 'app-createtest',
  templateUrl: './createtest.component.html',
  styleUrls: ['./createtest.component.scss'],
})

export class CreatetestComponent implements OnInit {
    public user = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
        phone: '',
    }

    constructor (
        private createtestService: CreatetestService,
    ) { }

    ngOnInit() {
        this.user.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createtestService.GpCreate(this.user).subscribe(data => {
            this.user.name = ''
 	 	this.user.email = ''
 	 	this.user.phone = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}