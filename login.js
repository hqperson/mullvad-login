const request = require('request');
const prompt = require('prompt-sync')();

var login_code = prompt('Login id: ');
var api_end = "https://api.mullvad.net/www/accounts/"+login_code+'/';


function login(){
    if(login_code==null){
        console.log('No login specified..')
    } else{
        headers = {
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:77.0) Gecko/20100101 Firefox/77.0",
            "Host":"api.mullvad.net",
            "Origin":"https://mullvad.net",
            "Accept":"application/json, text/plain, */*"
        };
        request.post({url: api_end,headers: headers},function(res){
            if(res.statusCode==405){
                console.log('Invalid login credentials..');
            } else{
                console.log('successful login: ',login_code);
                

            }

        });
    }

}
login();
