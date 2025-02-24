import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getObjectInfo ,getPicklistValues } from 'lightning/uiObjectInfoApi';
import Player_Object from '@salesforce/schema/Player__c'
import Nationality_feild from '@salesforce/schema/Player__c.Nationality__c'


export default class PlayerSearchFilter extends NavigationMixin(LightningElement) {

    recordTypeId;
    optionsarr;
    fieldvalues;
    playersNationality
    selectedPlayerId;

    @wire(getObjectInfo,{objectApiName :Player_Object })
    objectInfos({
        data,error
    }){
        if(error){
            console.log(error);
        }else if(data){
            this.recordTypeId = data.defaultRecordTypeId;
            console.log(JSON.stringify(this.recordTypeId));      
        }
    }

    @wire(getPicklistValues,{recordTypeId : '$recordTypeId' , fieldApiName : Nationality_feild })
    nationaliFieldValues({
        error,data
    }){
        if(error){
            console.error(error);
            
        } else if (data){

            let arr = [];
            this.fieldvalues = data.values;
            console.log('data:-'+JSON.stringify(this.fieldvalues))

            this.fieldvalues.forEach(element => {
                arr.push({label : element.label , value:element.value});
            });

            this.optionsarr = arr;
            console.log('data:-'+JSON.stringify(this.optionsarr))

        }
    }



    createPlayerHandler(){

       this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Player__c',
                actionName : 'new'
            },
            // state :{
            //     filterName : '__Recent'
            // }
        })
    }

    handleOnChange(event){
        this.playersNationality = event.detail.value;
        console.log('value'+this.playersNationality);

        this.template.querySelector('c-player-search-results').searchPlayerByNationality(this.playersNationality)
    }

    handleSelectedPlayer(event){
        this.selectedPlayerId = event.detail.playerId
        console.log('selected player id from child to parent'+ JSON.stringify(this.selectedPlayerId));

    }
}