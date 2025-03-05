import { LightningElement , api } from 'lwc';

export default class TestAcctIdLWC extends LightningElement {


    @api recordId;

    connectedCallback(){
        console.log('test========='+this.recordId);
        
    }
}