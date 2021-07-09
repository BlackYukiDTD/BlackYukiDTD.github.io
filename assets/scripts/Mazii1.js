var obj = JSON.parse($response.body);

obj.result.premium_date= "2020-06-14 13:40:23";
obj.result.premium_expired_date= "2999-07-14 13:40:23";
obj.result.lifetime= 1;
obj.result.premium= true;

$done({body: JSON.stringify(obj)});
