import { api, LightningElement } from 'lwc';
import OBJ_NAME from '@salesforce/schema/Account'
import ACCNAME from '@salesforce/schema/Account.Name'
import ACCPHONE from '@salesforce/schema/Account.Phone'
import ACCADDRESS   from '@salesforce/schema/Account.BillingCountry'
import ACCREVENUE from '@salesforce/schema/Account.AnnualRevenue'


export default class RecordFormDemoDefaultMode extends LightningElement {

   objectApiName = OBJ_NAME;
   @api recordId 
   fields = [ACCNAME , ACCPHONE , ACCADDRESS,ACCREVENUE]
}