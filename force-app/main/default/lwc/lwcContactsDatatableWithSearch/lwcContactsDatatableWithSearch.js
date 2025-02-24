import { api, LightningElement, track } from 'lwc';
import getContacts from '@salesforce/apex/ComboBoxWithDatatable.getContacts'
import searchContacts from '@salesforce/apex/ComboBoxWithDatatable.searchContacts'

const columns = [
    {label: 'Name' , fieldName : 'Name'},
    {label: 'Contact Email' , fieldName : 'Email'}
]
export default class LwcContactsDatatableWithSearch extends LightningElement {

    showLabel = "Show Contacts";
    showDatatable = false;
    columns = columns;
   @track data = [];

    @api recordId;
    searchString='';

    connectedCallback(){
        getContacts({selectedAccountId : this.recordId})
        .then(result => {
            this.data = result
        })
        .catch(error => {
            console.error(JSON.stringify(error))
        })
    }

    handleClick(){
       if(this.showLabel == 'Show Contacts'){
        this.showLabel = 'Hide Contacts'
        this.showDatatable = true;
        // searchContacts({searchString : this.searchString ,accountId : this.recordId})
        // .then(result => {
        //     this.data = result
        // })
        // .catch(error => {
        //     console.error(JSON.stringify(error))
        // })
       }else{
        this.showLabel = 'Show Contacts'
        this.showDatatable = false
       }
    }

    handleChange(event){
        this.searchString = event.detail.value;
        console.log(searchString);
        searchContacts({searchString : this.searchString , accountId : this.recordId})
        .then(result =>{
            console.log(result)
            this.data = result;
        })
        .catch(error =>{
            console.error(error)
        })
    }
}