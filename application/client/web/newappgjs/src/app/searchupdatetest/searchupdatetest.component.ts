import { Component, OnInit } from '@angular/core';
import { SearchupdatetestService } from './searchupdatetest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchupdatetest',
  templateUrl: './searchupdatetest.component.html',
  styleUrls: ['./searchupdatetest.component.scss'],
})

export class SearchupdatetestComponent implements OnInit {
    queryId: any;
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },{ headerName: 'phone', field: 'phone'  },];
    public user = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
        phone: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private searchupdatetestService: SearchupdatetestService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.user.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpGetNounById() {
        this.searchupdatetestService.GpGetNounById(this.queryId).subscribe(data => {
            this.user = data
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updatetest'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}