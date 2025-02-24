import { LightningElement, track } from 'lwc';

export default class TrackLwcDemo extends LightningElement {

    @track fullName ={ firstName:"" , lastName:""};

    changeHandler(event){
        const feild = event.target.name;
        
        if(feild === 'firstName'){
            this.fullName.firstName = event.target.value;
        }
        else if(feild === 'lastName'){
            this.fullName.lastName = event.target.value;
        }
    }

}
