import { LightningElement } from 'lwc';

export default class ChildToParentCommChildLwc extends LightningElement {


    addHandler(){

        this.dispatchEvent(new CustomEvent("add"));
    }

    subHandler(){
        this.dispatchEvent(new CustomEvent("substract"))
    }

    handleMultiply(event){
        var multiValue = event.target.value;

        this.dispatchEvent(new CustomEvent('multiply',{
            detail : multiValue
        }))
    }

}