import { LightningElement } from 'lwc';
import IMDBMovieApiController from '@salesforce/apex/IMDBMovieApiController.iMDBMovieApiSearchController';

export default class MovieSearchComLwc extends LightningElement {

    movieData =''

    movieName ='';

    SearchHandler(event){

        this.movieName = this.refs.movieNameSearchText?.value;
        console.log(this.movieName);


        IMDBMovieApiController({moviewName : this.movieName})
        .then( res => {
            if(res){
                let data = JSON.parse(res);
                this.movieData = data.success ? data.result : []
            }
        //this.movieData = res
        console.log(this.movieData);
        
        })
        .catch(error =>{
        console.error(error);
        
         })

    }

}
