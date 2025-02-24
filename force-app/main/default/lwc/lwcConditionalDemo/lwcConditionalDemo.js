import { LightningElement, track } from 'lwc';

export default class LwcConditionalDemo extends LightningElement {

    @track buttonlabel = 'Button1'; 

    @track property1 = false;
    

    clickHandler(){

        if(this.property1 == true){
            this.property1 = false;
            this.buttonlabel = 'button3';
        }else if (this.property1 == false){
            this.property1 = true;
            this.buttonlabel = 'button1';
        }
    }

    
}