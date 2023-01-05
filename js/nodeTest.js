const fs = require('fs');

fs.readFile('D:\WebServerFile\demo-悦听player\1.txt','utf-8',function(err,result){

    if(err){

        return console.log("read this file failure!"+err.message);

    }

    console.log("read this file successful and this file content is : "+result);

})