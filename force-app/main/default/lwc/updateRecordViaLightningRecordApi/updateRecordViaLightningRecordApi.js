import { LightningElement } from 'lwc';
import ACC_RECORD_ID from '@salesforce/schema/Account.Id'
import ACC_NAME from '@salesforce/schema/Account.Name'
import { updateRecord } from 'lightning/uiRecordApi'; 
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class UpdateRecordViaLightningRecordApi extends LightningElement {

    accountRecordId ;
    accountName;


    handleAccountId(event){
        this.accountRecordId = event.target.value;
    }

    handleName(event){
        this.accountName = event.target.value;

    }

    handleUpdateAccount(){
        const fields ={}
        fields[ACC_RECORD_ID.fieldApiName] = this.accountRecordId;
        fields[ACC_NAME.fieldApiName] = this.accountName;

        const recordInput = {fields}

        updateRecord(recordInput)
        .then(result => {
            console.log(result)
            this.ShowToastEvent();
        })
        .catch(error => {
            console.error(error)
        })


    }

    ShowToastEvent(){
        const evnt = new ShowToastEvent({
            title : 'Record is updated',
            variant : 'success',
            message : this.accountRecordId
        });
        this.dispatchEvent(evnt);
    }
}