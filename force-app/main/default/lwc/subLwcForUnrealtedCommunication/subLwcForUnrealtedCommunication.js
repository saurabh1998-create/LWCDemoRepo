import { api, LightningElement , wire } from 'lwc';
import { subscribe , MessageContext } from 'lightning/messageService';
import COUNTING_UPDATE_MESSAGE from '@salesforce/messageChannel/counting_Update__c'

export default class SubLwcForUnrealtedCommunication extends LightningElement {

     counter =0 ;

    subscribtion = null;

    @wire(MessageContext)
    messageContext

    connectedCallback(){
        this.subscribetoMessageChannel();
    }

    subscribetoMessageChannel(){
        this.subscribtion = subscribe(this.messageContext,COUNTING_UPDATE_MESSAGE,
            (message) => this.updateCounter(message)
        )
    }

    updateCounter(message){
        //alert(JSON.stringify(message));

        if(message.operator =="add"){
            this.counter += 1
        }
        else if(message.operator =="substract"){
            this.counter -= 1;
        }
        else if (message.operator == "multiply"){
            this.counter *= 2
        }
    }


}