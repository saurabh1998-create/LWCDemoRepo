import { LightningElement , track } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBoxWithDatatable.getAccounts'

export default class ComboBoxLwcDemo extends LightningElement {

     @track value = '';
     @track optionarr = [];


     get options(){
        return this.optionarr;
     }


     connectedCallback(){
        getAccounts()
        .then(result => {
            let arr = [];
            for(var i =0 ; i<result.length; i++){
                arr.push({
                    label:result[i].Name , value:result[i].Id
                })
            }

            this.optionarr = arr;
        }
        )
     }

     changeHandler(event){
        this.value = event.detail.value;

     }


}