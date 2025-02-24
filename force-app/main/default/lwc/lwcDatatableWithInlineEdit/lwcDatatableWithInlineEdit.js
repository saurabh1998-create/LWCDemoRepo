import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBoxWithDatatable.getAccounts';
import updateAccount from '@salesforce/apex/ComboBoxWithDatatable.updateAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

const columns = [
    {label: 'Name' , fieldName:'Name',editable:true},
    {label:'Website' ,fieldName:'Website',editable:true},
    {label:'Phone' , fieldName:'Phone',editable:true}

]
export default class LwcDatatableWithInlineEdit extends LightningElement {


    columns=columns;
    @track data=[];

    
    ShowToastEvent(result){
        if(result == 'Success'){
        const evnt = new ShowToastEvent({
            title : 'Record Updated Successfully',
            message : 'Update Done',
            variant : 'success'
        })
        this.dispatchEvent(evnt);
        }else if(result == 'fail'){
            const evnt = new ShowToastEvent({
                title : 'Record Updated Successfully',
                message : 'Update Done',
                variant : 'error'
            }) 
            this.dispatchEvent(evnt);
        }
    }

    handleOnSave(event){

        const updatedValues = event.detail.draftValues;
        updateAccount({accountData :updatedValues })
        .then(result => {
            console.log(JSON.stringify(result))
            this.ShowToastEvent(result);

        })
        .catch(error => {
            console.error(error)
        })


    }

    connectedCallback(){
    getAccounts()
    .then(result => {
        this.data = result;
    })
    .catch(error => {
        error = error
    })

    }
    
}