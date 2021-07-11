var obj = JSON.parse($response.body);

obj = {
  "result": {
    "is_premium": "1",
    "premium_expired": "0",
  }
};

$done({body: JSON.stringify(obj)});