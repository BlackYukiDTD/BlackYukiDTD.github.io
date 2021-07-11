var obj = JSON.parse($response.body);

obj.result.user.subscription= "Unlimited";

$done({body: JSON.stringify(obj)});

