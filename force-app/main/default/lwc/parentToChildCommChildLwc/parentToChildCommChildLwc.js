import { api, LightningElement } from 'lwc';

export default class ParentToChildCommChildLwc extends LightningElement {
    @api counter =0;

    @api updateCounter(){
        this.counter += 77;
    }
}