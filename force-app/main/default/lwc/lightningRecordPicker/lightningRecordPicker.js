import { LightningElement , track} from 'lwc';
import {NavigationMixin} from 'lightning/navigation'


const options = [
    {label : "Account" , value : "Account"},
    {label: "Contact" , value : "Contact"},
    {label : "Opportunity" , value : "Opportunity"}
]

export default class LightningRecordPicker extends NavigationMixin(LightningElement) {

    @track targetObj = 'Account';
    options = options
    selectedRecordId


    handleObjectChange(event){

        this.targetObj = event.target.value
        console.log('evet'+this.targetObj);
        

    }

    handleRecordSelection(event){

        this.selectedRecordId = event.detail.recordId;


        console.log(this.selectedRecordId);

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : this.selectedRecordId ,
                objectApiName : this.targetObj ,
                actionName : 'view'
            }
        })
        
    }



}