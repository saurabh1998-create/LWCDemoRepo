import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBoxWithDatatable.getAccounts'

export default class ForEachLwcDemo extends LightningElement {

    @track data = [];

    @wire (getAccounts)
    getAccounts;

} 