var obj = JSON.parse($response.body);

obj = {
  "profile": {
    "id": 44722,
    "email_verified": true,
    "end_of_premium": 9999-12-30,
    "_end_of_premium": 9999-12-30 23:59:00,
    "email": "lil.love195@gmail.com",
    "is_premium": true,
    "token": "cfd404a67c1dc543f796cbe9e6a63b1d"
  }
};

$done({body: JSON.stringify(obj)});