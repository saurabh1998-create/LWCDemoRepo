import { LightningElement , api } from 'lwc';

export default class ChildComponentLWC1 extends LightningElement {

   @api itemName = 'Saurabh';

   @api clickHandler(){
      this.itemName = "New value from onClickEvent";
   }
    
}