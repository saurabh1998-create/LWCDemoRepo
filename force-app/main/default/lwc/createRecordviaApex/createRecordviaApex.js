import { LightningElement } from 'lwc';
import createAccountRecord from '@salesforce/apex/createAccountRecord.createAcc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class CreateRecordviaApex extends LightningElement {
    accountId;
    accountName;
    accountIndustry;

    handleAccountName(event){
        this.accountName = event.target.value;
    }

    handleIndustry(event){
        this.accountIndustry = event.target.value;
    }

    handleCreate(){
        createAccountRecord({accName:this.accountName , accIndustry:this.accountIndustry})
        .then(result => {
            console.log(result);
            this.accountId = result[0].Id;
            this.ShowToastEvent()
        })
        .catch(error =>{
            console.error(error);
        })        
    }

    ShowToastEvent(){

        const evnt = new ShowToastEvent({
            title : 'Account Created',
            message : this.accountName ,
            variant : 'success'
        })
        this.dispatchEvent(evnt);
    }
}