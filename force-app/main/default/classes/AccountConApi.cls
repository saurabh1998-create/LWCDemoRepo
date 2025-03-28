@RestResource(urlmapping='/AccountContactApi')
global class AccountConApi {
    
    @HttpPOST
    global static void createAccCon(){
        
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        
        String body = req.requestBody.toString();
        
        system.debug('body before deserialize'+body);
        AccountConApiJSONObjCls obj = (AccountConApiJSONObjCls) JSON.deserialize(body,AccountConApiJSONObjCls.class);
        system.debug('obj after deserilize' + obj);
        system.debug('obj details'+obj.customerName+'isaccount'+obj.isAccount);
        
        if(obj.isAccount == true){
            Account acc = new Account();         
            acc.Name = obj.customerName;            
            insert acc;          
        }else if (obj.isAccount == false){
            Contact con = new Contact();
            con.lastName = obj.customerName;
            insert con;
        }
    }

}