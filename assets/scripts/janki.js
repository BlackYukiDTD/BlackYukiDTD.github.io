var obj = JSON.parse($response.body);

obj.User.is_premium= true;
obj.User.is_premium_cn= true;
obj.User.is_premium_en= true;

$done({body: JSON.stringify(obj)});

