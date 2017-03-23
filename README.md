## ihatesoap - but it's not that bad
Example of how to call a SOAP service using Node.js. This is specific to SOAP services that I encounter at 
work that are typically hosted behind a web service gateway and require authentication via a client 
certificate. 

*Note that this will return an error since I'm not fulfilling the WSDL contract, so this is the expected
result:*
```aidl
java.lang.IllegalArgumentException: Cannot set a null value
```
