import { LightningElement , track } from 'lwc';
import getContacts from '@salesforce/apex/ComboBoxWithDatatable.getAccounts'

const columns = [
    {label : 'Contact Name' , fieldName : 'Name'},
    {label : 'Contact Id' , fieldName: 'Id'},
]
export default class ImperativemethodToGetDataFromSalesforce extends LightningElement {

    @track columns = columns;
    @track data = [];

    connectedCallback(){

        getContacts()
        .then(result =>{
            this.data = result;
        })
        .catch(error => {
            console.log("error occured")
        })
    }


}