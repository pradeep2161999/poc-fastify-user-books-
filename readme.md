
# Bcrypt:
- It is a library used to hash the password.It is used to store a password safely we use bcrypt package.
## Step1:Install bcrypt via npm:

```Javascript
npm install bcrypt
```
## step2:Include the bcrypt module:
    TO use bcrypt we use the following line in the code,
 ```Javascript
 const bcrypt = require('bcrypt');
 ```
 ## step3:set a value for salt round:
    Next we set the salt round value.the higher the salt round takes the more times the hashing algorithm takes.
```Javascript
const saltrounds =10;
```
## step4:Declare a pasword variable:
we hard code a user password In real life, this would be a value passed back from a registration form.
```Javascript
var password = "Fkdj^45ci@Jad";
``` 
## step5:Generate a salt
 you can salt and hash the password in one function or by using seperate function.gensalt function is used to generate a salt function.
 We pass bcrypt.genSalt() these parameters:
- saltRounds
- Callback of error and the returned salt:
```Javascript
bcrypt.genSalt(saltRounds, function(err, salt) {
  // returns salt
});
```
## step 6: Hash the password
We now add the hash function inside genSalt.

We pass bcrypt.hash() these parameters:

- Password
- Salt
- Callback of error and the returned hash
```Javascript
bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(password, salt, function(err, hash) {
  // returns hash
  console.log(hash);
  });
});
```
## compare a password to hash:
```Javascript
const bcrypt = require ('bcrypt'); // require bcrypt

const saltRounds = 10;  //  Data processing speed
var password = "Fkdj^45ci@Jad";  // Original Password
var password2 = "djlfhjd(456";
bcrypt.hash(password, saltRounds, function(err, hash) { // Salt + Hash
  bcrypt.compare(password2, hash, function(err, result) {  // Compare
    // if passwords match
    if (result) {
          console.log("It matches!")
    }
    // if passwords do not match
    else {
          console.log("Invalid password!");
    }
  });
});
```
## Salt rounds:
    The salt rounds is a cost factor.it controls how much time need to hash the single bcrypt file.

# JWT - JSON Web Token
    It is a open standard that defines a compact and self contained way of securely transmitting information between parties as a json object.
    It consist of three parts they are,
- header
- payload
- signatureJWT_SECRET_KEY = gfg_jwt_secret_key
## Install json web toen
     npm install jsonwebtoken


