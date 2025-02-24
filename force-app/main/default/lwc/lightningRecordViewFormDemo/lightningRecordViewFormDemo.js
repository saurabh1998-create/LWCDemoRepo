import { api, LightningElement } from 'lwc';
import ACC_OBJ_NAME from '@salesforce/schema/Account'
import ACC_NAME_FIELD from '@salesforce/schema/Account.Name'
import ACC_OWNER_FIELD from '@salesforce/schema/Account.OwnerId'
import BILLINGADDRESS_FIELD from '@salesforce/schema/Account.BillingAddress'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
export default class LightningRecordViewFormDemo extends LightningElement {

    objectName = ACC_OBJ_NAME;

    AccfieldName = ACC_NAME_FIELD;

    owner = ACC_OWNER_FIELD
    
    address =BILLINGADDRESS_FIELD

    Phone = PHONE_FIELD


    @api recordId;
   
    
}