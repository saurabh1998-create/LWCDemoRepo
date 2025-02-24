import { api, LightningElement, track, wire } from 'lwc';
import ApexToGetContact from '@salesforce/apex/comboBoxWithDatatable.getContacts'

const columns = [
    {label : "Contact Name" , fieldName : "Name"},
    {label: "Contact Email", fieldName : "Email"},
]
export default class RelatedContactsDatatableLWC extends LightningElement {


@track columns = columns;

@track data = [];
@track showContactDatatable = false;
@track buttonLabel = "Show"
@api recordId;

showdatatable(){
    if(this.showContactDatatable == false){
    this.showContactDatatable = true;
    this.buttonLabel ="Hide"
    }
    else if(this.showContactDatatable == true){
        this.showContactDatatable = false
        this.buttonLabel ="Show"
    }

    ApexToGetContact({selectedAccountId : this.recordId})
    .then(result => {
        this.data=result;
    })
    .catch(error => {
        console.error();
    })
        
    

}


}