//3210. Find the Encrypted String MEDIUM
var getEncryptedString = function(s, k) {
    let encryptedStr = '';

    for(let c of s) {
        if(c.charCodeAt(0) ) {
            encryptedStr += String.fromCharCode((c.charCodeAt(0) - 97 + k) % 26 + 97);

        }else {
            encryptedStr +=c;
        }
        
    }
    return encryptedStr;
   };