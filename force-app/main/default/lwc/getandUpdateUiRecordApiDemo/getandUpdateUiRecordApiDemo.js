import { api, LightningElement , wire } from 'lwc';
import ACC_NAME from '@salesforce/schema/Account.Name'
import ACC_INDUSTRY from '@salesforce/schema/Account.Industry'
import ACC_OWNER from '@salesforce/schema/Account.Owner.Name'
import ACC_PHONE from '@salesforce/schema/Account.Phone'
import { getRecord , deleteRecord } from 'lightning/uiRecordApi';
import {NavigationMixin} from 'lightning/navigation';

const FIELDS = [ACC_INDUSTRY,ACC_OWNER,ACC_PHONE,ACC_NAME];

export default class GetandUpdateUiRecordApiDemo extends NavigationMixin(LightningElement) {

    accountName;
    accountIndustry;
    accountOwner;
    accountPhone;
    accountData;
    accountId;
    templatetrue=true;
    @api recordId;

    @wire(getRecord,{recordId: '$recordId',fields:FIELDS})
    wireAccounts({error,data}){
        if(error){
            console.error(JSON.stringify(error));
        }else if(data){
            this.accountData = data;
            console.log(JSON.stringify(this.accountData))
            this.accountId = this.accountData.id
            this.accountName =  this.accountData.fields.Name.value
            this.accountIndustry =  this.accountData.fields.Industry.value
            this.accountOwner =  this.accountData.fields.Owner.displayValue
            this.accountPhone =  this.accountData.fields.Phone.value
        }

    }

    deleteAccount(){
    deleteRecord(this.accountId)
    .then(res =>{
        console.log('navigation')
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName : 'Account',
                actionName : 'list'
            },

        });
        window.alert("Record Deleted")

    })
    .catch(error => {
        console.error(error)
    })


    }

}