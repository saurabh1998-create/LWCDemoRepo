import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJ from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class LightningRecordApiLwcDemo extends LightningElement {

    accountId;
    name=''

    handlechangeName(event){
        this.name = event.target.value;

    }

    handleCreateAccount(){

        const fields = {}

        fields[ACCOUNT_NAME.fieldApiName] = this.name;

        const recordInput = {apiName : ACCOUNT_OBJ.objectApiName , fields}

        createRecord(recordInput)
        .then(acc => {
            this.accountId = acc.id   
            this.ShowToastEvent();
        })
        .catch(error =>{
            console.error('error'+ error)
        })
    }


            ShowToastEvent(){
                const evnt = new ShowToastEvent({
                    title : 'New Account Created',
                    variant : 'success',
                    message : this.accountId

                        });
                        this.dispatchEvent(evnt);
            }
        
}