/*
JibJab unlock

Surge4:
http-response https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/jibjab.js

QX：
https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/jibjab.js

Surge & QX MITM = origin-prod-phoenix.jibjab.com
*/

let obj = JSON.parse($response.body);
obj.data.attributes["is-paid"] = true;
obj.data.attributes["email"] = "BlackYukiDTD";
$done({body: JSON.stringify(obj)});