var obj = JSON.parse($response.body);

obj.has_unlimited= true;

$done({body: JSON.stringify(obj)});

