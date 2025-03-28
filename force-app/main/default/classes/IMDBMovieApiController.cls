public with sharing class IMDBMovieApiController {
    
    @AuraEnabled(cacheable=true)
    public static string iMDBMovieApiSearchController(String moviewName) {

        Http http = new HTTP();
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        //req.setHeader('authorization', 'apikey 70o63tGleCnMxCyF0KQxOk:7tw9dZ7fAbZOkYQPwdgHCV');
        req.setEndpoint('callout:IMDB/imdb/imdbSearchByName?query='+moviewName);
        HttpResponse res = http.send(req);
        system.debug(res);
        system.debug(res.getBody());

        if(res.getStatusCode() == 200){

            return res.getBody();
        } else {
            return 'Error Code :' + res.getStatusCode();
        }

    }
}