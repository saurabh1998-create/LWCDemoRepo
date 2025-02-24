import { LightningElement,track,wire } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBoxWithDatatable.getAccounts';

const columns= [
    {label : 'Account Name', fieldName : 'Name'},
    {label : 'Account Id', fieldName : 'Id'},
];
export default class WireDecoratorDemo extends LightningElement {

    @track columns = columns;
    @track data = [];

    @wire(getAccounts)
    wiredAccounts({data,error}){
        if(data){
            this.data = data;
        }
        else if(error){
            
            console.log("error");
        }
    }

}