import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HelloTestLWC extends LightningElement {

 myTitle = "Hello World";

 handleClick(){
   this.ShowToastEvent();
 }

ShowToastEvent(){
   const event = new ShowToastEvent({

      title: 'Show Toast',
      message: 'Button clicked successfully',
      variant: 'error',

   })
   this.dispatchEvent(event);
 }

//  connectedCallback(){
//    let division = this.myFunction(12,6);
//    window.alert(division);
//  }

// //  myFunction(num1,num2){
// //    return (
// //      num1/num2)
// //  }

//  myFunction = (num1 , num2) => {
//    return (num1/num2);
// }



}