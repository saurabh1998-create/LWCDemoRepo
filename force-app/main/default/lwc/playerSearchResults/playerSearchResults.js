import { api, LightningElement, track, wire } from 'lwc';
import getAllPlayers from '@salesforce/apex/playerController.getAllPlayers';
import getPlayersByNationality from '@salesforce/apex/playerController.getPlayersByNationality'
import {publish , MessageContext} from 'lightning/messageService';
import SELECTED_PLAYER_MESSAGE from '@salesforce/messageChannel/selectedPlayer__c';

export default class PlayerSearchResults extends LightningElement {
    data = [];
    error;
    slectedplayerId

    @wire(getAllPlayers)
    wiredAllPlayers({ error, data }) {
        if (data) {
            this.data = data;
            this.error = undefined;
            console.log('data:', JSON.stringify(data));
        } else if (error) {
            this.error = error;
            this.data = [];
            console.error(error);
        }
    }

    @api searchPlayerByNationality(nationality){

        console.log('new selected value'+ nationality);

        getPlayersByNationality({nationality:nationality})
        .then(result =>{
            this.data = result;
            console.log('nationality'+this.data);
            
        })
        .catch(error =>{
            this.error = error;
            console.error('nationalitymethod'+error);
            
        })
    }

    @wire(MessageContext)
    messageContext;

    handleClickPlayerCard(event){
        this.slectedplayerId = event.currentTarget.dataset.id
        console.log('selected player id'+this.slectedplayerId);

        publish(this.messageContext,SELECTED_PLAYER_MESSAGE,{ playerId : this.slectedplayerId})

        this.dispatchEvent( new CustomEvent('selectedplayer',{
            detail: {
                playerId : this.slectedplayerId
            }
        }))

        

        
    }

}