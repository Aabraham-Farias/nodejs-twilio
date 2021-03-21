require('dotenv').config();

const account_sid=process.env.ACCOUNT_SID;
const authToken=process.env.AUTH_TOKEN;

const client=require('twilio')(account_sid,authToken);

client.messages.create({
    to:process.env.MY_PHONE_NUMBER,
    from:'+17142159193',
    body:'Hello world',
})
    .then(message => console.log(message.sid));