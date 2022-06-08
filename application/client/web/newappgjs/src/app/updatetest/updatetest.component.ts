import { Component, OnInit } from '@angular/core';
import { UpdatetestService } from './updatetest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatetest',
  templateUrl: './updatetest.component.html',
  styleUrls: ['./updatetest.component.scss'],
})

export class UpdatetestComponent implements OnInit {
    queryId: any;
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
        private updatetestService: UpdatetestService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.user.created_by = sessionStorage.getItem('email') || ''; 
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpUpdate() {
        this.updatetestService.GpUpdate(this.user).subscribe(data => {
            this.user.name = ''
 	 	this.user.email = ''
 	 	this.user.phone = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updatetestService.GpGetNounById(this.queryId).subscribe(data => {
            this.user = data
        },
        error => {
            console.log('Error', error);
        });
    }
}