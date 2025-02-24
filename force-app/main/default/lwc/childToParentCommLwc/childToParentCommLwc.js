import { LightningElement, track } from 'lwc';

export default class ChildToParentCommLwc extends LightningElement {

   @track Counter = 0;

    addHandler(){
        this.Counter += 1;
    }
    SubHandler(){
        this.Counter -= 1;
    }

    multiplyHander(event){
        var valueForMulti = event.detail

        this.Counter *= valueForMulti;

    }
}