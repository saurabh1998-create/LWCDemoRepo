import { LightningElement, wire, api, track } from 'lwc';
import getOppList from '@salesforce/apex/OpportunityListCompController.getOppList';
import {NavigationMixin} from 'lightning/navigation'

const columns = [
    { label: 'Opp. Name', fieldName: 'opportunityLink', type: 'url', typeAttributes: { label: { fieldName: 'Name' } }, sortable: true  },
    { label: 'Amount', fieldName: 'Amount',sortable:true } ,
    {label: 'Stage',fieldName:'StageName' ,sortable:true},
    {label:'Close Date' , fieldName:'CloseDate', sortable:true}
];

export default class OppListComponent extends NavigationMixin(LightningElement) {
    @track columns = columns;
    @track allData = [];
    @track data = [];
    @track currentPage = 1;
    @track pageSize = 5;
    @api recordId;
    @track totalPages
    @track noOfRecords;

    connectedCallback() {
        console.log('recordid ===' + this.recordId);
    }

    @wire(getOppList, { acctId: '$recordId' })
    oppList({ error, data }) {
        if (error) {
            console.error(error);
        } else if (data) {

            this.allData = data.map(opportunity => { // Map data to add NameUrl
                return {
                    ...opportunity,
                    opportunityLink: `/${opportunity.Id}` // Creating the URL for navigation
                };
            });
            console.log('dat--->', data); 
           // this.allData = data;
            this.updatePaginatedData();
            this.totalPages = Math.ceil(this.allData.length / this.pageSize)  
            this.noOfRecords = this.allData.length 
        }
    }

    get Opportunitiestitle(){
        return `Opportunities(${this.noOfRecords})`
    }


    updatePaginatedData(){
        const start = (this.currentPage -1)*this.pageSize   
        const end = start + this.pageSize
        this.data = this.allData.slice(start,end)
    }


    nextPage(){
        const start = this.currentPage * this.pageSize
        const end = start + this.pageSize
        this.data = this.allData.slice(start,end)
        
        if(this.currentPage < this.totalPages){
        this.currentPage += 1}
    }

    previousPage(){
        console.log('previoues page method called');
        
        const start = ((this.currentPage - 2) * this.pageSize)
        console.log('start '+start);
        
        const end = start + this.pageSize
       
        
        this.data = this.allData.slice(start,end)
        

        if(this.currentPage > 1 ){
        this.currentPage -= 1;
        }
    }


    get hasNextPage(){
        if(this.currentPage < this.totalPages){
            return false
        }else{
            return true
        }
    }

    get hasPrevious(){

        return this.currentPage <= 1
    }




}