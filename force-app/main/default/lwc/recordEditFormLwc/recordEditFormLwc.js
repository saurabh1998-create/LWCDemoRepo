import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import ACC_NAME from '@salesforce/schema/Account.Name'
import ACC_PHONE from '@salesforce/schema/Account.Phone'



export default class RecordEditFormLwc extends LightningElement {


    objectApiName = ACCOUNT_OBJECT

    AccName = ACC_NAME ;

    AccPhone = ACC_PHONE ;

    AccountId = "Created Account Id"



    hanldesuccess(event){

      this.AccountId = event.detail.id

      const toastevent = new ShowToastEvent({
        title : "Successful",
        message : "Record Created",
        variant : 'success'

      })

      this.dispatchEvent(toastevent);
      
    }


}