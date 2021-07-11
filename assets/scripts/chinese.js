var obj = JSON.parse($response.body);

obj.vip= 1;
obj.vip_expired= 4096019658000;
obj.vip_label= "Hack by Blackyuki";
$done({body: JSON.stringify(obj)});

