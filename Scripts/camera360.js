var obj = JSON.parse($response.body);

obj= {
  "status" : 200,
  "data" : {
    "sandbox" : 0,
    "purchaseTime" : 1571682188,
    "giftVip" : 0,
    "productId" : "VIP_yearly_29.99",
    "appleVip" : 1,
    "expireTime" : 4096532852,
    "operationVip" : 1,
    "errorCode" : 0
  },
  "message" : "ok",
  "exetime" : "1530612927774-1570612930858",
  "serverTime" : 1570612930.8580999
};

$done({body: JSON.stringify(obj)});
