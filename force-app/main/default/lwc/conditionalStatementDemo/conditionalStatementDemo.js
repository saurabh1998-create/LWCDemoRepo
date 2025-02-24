import { LightningElement, track } from 'lwc';

export default class ConditionalStatementDemo extends LightningElement {

    @track buttonlabel = 'Show' ;
    @track showifCard = false;

    handleclick(event){
        const field = event.target.label;

        if(field === 'Show'){
            this.buttonlabel = 'Hide';
            this.showifCard = true;
        }else if (field === 'Hide'){
            this.buttonlabel = 'Show';
            this.showifCard = false;
        }
    }
}