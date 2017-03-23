const request = require('request');
const fs = require('fs');
const path = require('path');
const config = require('./config.js');

const pfxFile = path.resolve(__dirname,'certificates/keystore.pfx'); // client certificate used to authenticate though gateway

var options = {
    //proxy: 'http://localhost:8888', // send to charles for http-debugging, will result in mac verfiy failure if able to pass through gateway
    strictSSL: false,  // ignore any self-signed certs in the chain, for example a certain proxy
    pfx: fs.readFileSync(pfxFile),
    passphrase: config.passphrase,
    method: 'POST',
    url: `https://${config.server.url}`,
    qs: { wsdl: '' },
    headers: { 'content-type': 'text/xml' },
    body: config.soapBody };

request(options, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
});