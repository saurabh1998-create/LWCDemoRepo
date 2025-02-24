import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBoxWithDatatable.getAccounts'
import getContacts from '@salesforce/apex/ComboBoxWithDatatable.getContacts'

const columns =[
    {label:'Contact Name' , fieldName:'Name'},
    {label: 'Email' , fieldName:'Email'},

]
export default class ComboBoxWithDatatable extends LightningElement {

    @track value = '';
    @track optionsarr = []
    @track showContactDataTable = false;
    @track data = [];
    @track columns = columns;
    


    get options(){

         return this.optionsarr;
    }


    connectedCallback(){
        getAccounts()
        .then(result => {
            let arr = [];

            for(var i =0 ; i<result.length;i++){
                arr.push({label:result[i].Name , value:result[i].Id})
            }

            this.optionsarr = arr;
            
        })
    }

    changeHandler(event){

        this.showContactDataTable = true;

        this.value = event.detail.value;


        getContacts({selectedAccountId : this.value})
        .then(response =>{
            this.data = response
        })
        .catch(error => {
            window.alert('error'+error);
        })
    

    }
}