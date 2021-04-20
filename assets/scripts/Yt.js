/*
[Script]
http-request ^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier) script-path=https://Choler.github.io/Surge/Script/YouTube.js
[MITM]
hostname = *.googlevideo.com, *.youtube.com, youtubei.googleapis.com
*/

if ($request.url.indexOf("&oad") != -1) {
  $done({ response: {body: ""} });
} else if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace(/ctier=[A-Z]/, "ctier=A");
  $done({ response: { status: 302, headers: { Location: url } } });
} else {
  $done({})
}

/* Rule
URL-REGEX,https?:\/\/.+.googlevideo.com\/ptracking\?pltype=adhost,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/api\/stats\/ads,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/get_midroll_,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/pagead\/,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/ptracking\?,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/_get_ads,REJECT
URL-REGEX,https?:\/\/youtubei.googleapis.com\/.+ad_break,REJECT
URL-REGEX,https?:\/\/youtubei.googleapis.com\/youtubei\/.+(ad|log),REJECT
URL-REGEX,https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adformat,REJECT
URL-REGEX,https?:\/\/[\w-]+\.googlevideo\.com\/.+&oad,REJECT-TINYGIF
*/