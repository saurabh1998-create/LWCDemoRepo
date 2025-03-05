import { LightningElement, wire, track, api } from 'lwc';
import getOpportunityData from '@salesforce/apex/OpportunityController.getOpportunityData';

export default class OpportunityListTab extends LightningElement {
    @track columns = [];
    @track data = [];
    @track pagedData = [];
    @track error;
    @track isLoading = true;

    @track currentPage = 1;
    @track pageSize = 10;
    @track totalRecords = 0;
    @track totalPages = 0;

    @track sortBy;
    @track sortDirection;

    @api recordId;

    connectedCallback(){
        console.log('====acctid===tablwc'+this.recordId);
        
    }

    @wire(getOpportunityData , {recId : '$recordId'})
    wiredOpportunities({ error, data }) {
        this.isLoading = true;
        if (data) {
            this.data = data.opportunities;
            this.columns = data.columns;
            this.totalRecords = this.data.length;
            this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
            this.updatePagedData();
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data = [];
            this.columns = [];
        }
        this.isLoading = false;
    }

    updatePagedData() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.pagedData = this.data.slice(start, end);
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updatePagedData();
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updatePagedData();
        }
    }

    get isFirstPage() {
        return this.currentPage === 1;
    }

    get isLastPage() {
        return this.currentPage === this.totalPages;
    }

    handleSort(event) {
        this.sortBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;
        this.sortData(this.sortBy, this.sortDirection);
    }

    sortData(fieldname, direction) {
        let parseData = JSON.parse(JSON.stringify(this.data));
        let keyValue = (a) => {
            return a[fieldname];
        };
        let isReverse = direction === 'asc' ? 1 : -1;
        parseData.sort((x, y) => {
            x = keyValue(x) ? keyValue(x) : '';
            y = keyValue(y) ? keyValue(y) : '';
            return isReverse * ((x > y) - (y > x));
        });
        this.data = parseData;
        this.updatePagedData();
    }
}