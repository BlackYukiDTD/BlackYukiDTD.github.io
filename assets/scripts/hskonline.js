let obj = JSON.parse($response.body);
let url = $request.url;
const cons1 = "/v1/my/profile";
const cons2 = "/v4/my/info";
const cons3 = "/v3/rank/list";

if(url.indexOf(cons1)!= -1) {
obj.vip= 2;
obj.vip_lifetime= 2;
obj.vip_label= "Hack by Blackyuki";
obj.essay_times= 4096019658000;
}

if(url.indexOf(cons2)!= -1) {
obj.vip= 2;
obj.vip_lifetime= 2;
obj.vip_label= "Hack by Blackyuki";
obj.vip_plus= 2;
obj.vip_plus_life_time= 2;
obj.vip_info.activity_time_left= 4096019658000;
obj.vip_info.vip_plus_time_left= 4096019658000;
obj.vip_info.vip_time_left= 4096019658000;
obj.vip_info.type= "Hack by Blackyuki";
}

if(url.indexOf(cons3) != -1 ) {
obj.user.vip= 1;
}
$done({body: JSON.stringify(obj)});
