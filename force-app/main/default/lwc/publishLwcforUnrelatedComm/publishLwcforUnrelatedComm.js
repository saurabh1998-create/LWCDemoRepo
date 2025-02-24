import { LightningElement, wire } from 'lwc';
import { publish , MessageContext } from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/counting_Update__c';

export default class PublishLwcforUnrelatedComm extends LightningElement {


    @wire(MessageContext)
    messageContext;


    handleIncrement(){

        const payload = {
            operator : "add",
            constant : 1 
        }

        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload)



    }

    handleDecrement(){
        const payload = {
            operator : "substract",
            constant : 1 
        }
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload)


    }

    handleMultiplication(){

        const payload = {
            operator : "multiply",
            constant : 2
        };
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload)


    }
}