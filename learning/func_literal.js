'use strict';

function sendSMS(name){
    console.log('Successfully sent sms to '+name);
}

function sendEmail(name){
    console.log('Successfully sent email to '+name);
}

function AddUser(name, cb){
    // TODO: To insert user in user table;
    console.log('User has been added as '+name);
    cb(name);
    console.log('----------------')
}

AddUser("Nazmul", function(name){
    sendSMS(name);
});

AddUser("Kausar", function(name){
    sendEmail(name);
});