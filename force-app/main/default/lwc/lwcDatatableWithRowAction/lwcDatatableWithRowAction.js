import { api, LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ComboBoxWithDatatable.getContacts'
import {NavigationMixin} from 'lightning/navigation'
import updateAccountPrimaryContact from '@salesforce/apex/ComboBoxWithDatatable.updateAccountPrimaryContact'

const actions = [
   {label : 'Assign' , name: 'assign'},
   {label : 'View' , name: 'view'}
]

const columns = [
    {label : 'Name',fieldName:'Name' },
    {label: 'Email',fieldName:'Email'},
    {
        type : 'action',
        typeAttributes: {rowActions :actions}
    }
]

export default class LwcDatatableWithRowAction extends NavigationMixin(LightningElement){


    @api recordId;
    data=[];

    columns = columns;

    connectedCallback(){

        getContacts({selectedAccountId : this.recordId})
        .then(result =>{
            this.data = result;
        })
        .catch(error =>{
            console.error(error);
        })
    }

    handleRowSelection(event){

        const ationName = event.detail.action.name;

        console.log(JSON.stringify(ationName));

        const rowData = event.detail.row;

        console.log(JSON.stringify(rowData));

        if(ationName == 'assign'){
            this.handleAssignment(rowData)
        } else{
            this.handleNavigation(rowData)
        }
    }


    handleAssignment(row){
        console.log("data from assignment"+row);
        updateAccountPrimaryContact({accountId : this.recordId , contactId: row.Id })
        .then(result => {
            console.log(result);
            
        })
        .catch(error => {
            console.log(error);
            
        })
        
    }

    handleNavigation(row){
        console.log("data from navigation"+row);

        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId : row.Id,
                actionName : 'view'
            }
        })
    }
}