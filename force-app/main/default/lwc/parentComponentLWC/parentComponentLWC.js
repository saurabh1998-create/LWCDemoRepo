import { LightningElement } from 'lwc';

export default class ParentComponentLWC extends LightningElement {

    onclickHandler(){
        this.template.querySelector("c-child-component-l-w-c1").clickHandler();
    }
}