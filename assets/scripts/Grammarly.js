var obj = JSON.parse($response.body);

obj = {
  "isPremium": true,
  "isAppleSubscription": true,
  "isGooglePlaySubscription": true
};


$done({body: JSON.stringify(obj)});