import { LightningElement ,wire } from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import SELECTED_PLAYER_MESSAGE from '@salesforce/messageChannel/selectedPlayer__c'
import getPlayerDetailsByID from '@salesforce/apex/playerController.getPlayerDetailsByID'

export default class PlayerDetailCard extends LightningElement {


    selectedplayerId;

    playerdata;

    @wire(MessageContext)
    messageContext

    connectedCallback(){

        subscribe(this.messageContext,SELECTED_PLAYER_MESSAGE,
            (slectedPlayer) => {
                console.log('selected player id from lms '+slectedPlayer.playerId);
                this.getPlayerDetails(slectedPlayer.playerId);
            }      
        )
        
    }


    getPlayerDetails(playerId){
        this.selectedplayerId = playerId;

        console.log('getPlayerDetails  '+ playerId + '  '+ this.selectedplayerId);
        

        getPlayerDetailsByID({playerId : this.selectedplayerId})
        .then(detail => {
            this.playerdata = detail;
            console.log('details from player card'+JSON.stringify(this.playerdata));
            
        })
        .catch(error => {
            console.error('error in getting player details'+error);
            
        })
    }

}