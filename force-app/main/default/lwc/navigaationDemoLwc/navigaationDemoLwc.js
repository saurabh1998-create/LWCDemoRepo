import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigaationDemoLwc extends NavigationMixin(LightningElement) {

    navigateHandler(){

        // navigate to lightning custom tab
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__navItemPage',
        //     attributes : {
        //         apiName : 'Property_Explorer'
        //     }
        // })

        //navigate to object home page
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__objectPage',
        //     attributes : {
        //         objectApiName : 'Account',
        //         actionName : 'home'
        //     },
        // })


        // to create the new record of the object pops up the screen
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__objectPage',
        //     attributes : {
        //         objectApiName : 'Account',
        //         actionName : 'new'
        //     },
        // })
        
        //to navigate to record page
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__recordPage',
        //     attributes : {
        //         recordId : '0012w00002Ad6e9AAB',
        //         objectApiName : 'Account',
        //         actionName : 'view'
        //     },
        // })

        //to navigate to record page in edit mode
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__recordPage',
        //     attributes : {
        //         recordId : '0012w00002Ad6e9AAB',
        //         objectApiName : 'Account',
        //         actionName : 'edit'
        //     },
        // })


        // navigate to object list filters as recently viewed
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__objectPage',
        //     attributes : {
        //         objectApiName : 'Account',
        //         actionName : 'list'
        //     },

        //     state :{
        //         filterName : '__Recent'
        //     }
        // })

        // navigates to the listview with given id
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__objectPage',
        //     attributes : {
        //         objectApiName : 'Account',
        //         actionName : 'list'
        //     },

        //     state :{
        //         filterName : '00BIg000000tSJjMAM'
        //     }
        // })

        // naavigate to the url outside salesforce
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__webPage',
        //     attributes : {
        //         url: 'https://www.youtube.com/'
        //     },
        // })

        // navigate to show one or more files
         this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'filePreview'
            },
            state:{
                recordIds : '069Ig0000085IOjIAM,069Ig0000085IOkIAM',
                selectedRecordId : '069Ig0000085IOjIAM'
            }
        })

        

    }
}