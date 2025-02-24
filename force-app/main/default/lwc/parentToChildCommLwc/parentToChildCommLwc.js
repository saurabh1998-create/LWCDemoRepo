import { LightningElement } from 'lwc';

export default class ParentToChildCommLwc extends LightningElement {

    counterValue =0;

    changeHandler(event){
            this.counterValue = parseInt(event.target.value);
    }

    AddHandler(){

        this.template.querySelector('c-parent-to-child-comm-child-lwc').updateCounter();

    }
}