var obj = JSON.parse($response.body);

obj = {
  "status": 200,
  "result": {
    "userId": 328678,
    "email": "lil.love195@gmail.com",
    "tokenId": "41d2ce2dfc1902bd2d80a3e187a4f384",
    "status": 1,
    "agreement": 0,
    "active": 1,
    "soc_armorial_id": 1,
    "soc_rank": 0,
    "username": "BlackYuki",
    "created_at": "2020-06-14 20:37:56",
    "updated_at": "2021-07-01 12:40:42",
    "id": 0,
    "lastest_update": null,
    "premium_date": "2020-06-14 13:40:23",
    "premium_expired_date": "2999-07-14 13:40:23",
    "lifetime": 1,
    "user_introduce": "duongtiendat195@icloud.com",
    "provider": "google",
    "provider_id": "",
    "google_id": "110909357611423851695",
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImI2ZjhkNTVkYTUzNGVhOTFjYjJjYjAwZTFhZjRlOGUwY2RlY2E5M2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDE4MzI4MjkyMTE5LXBlYW5ndmk2aWJhMTNnN3MxcmpzbXNsc2Y5ODJxOWpnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQu",
    "dict_register": 0,
    "language_id": 17,
    "virtual": 0,
    "apple_token": null,
    "apple_user": null,
    "premium": true,
    "code": 670688,
    "app_review": false,
    "profile": {
      "profile_id": 195245,
      "name": "",
      "image": "https:\/\/data.mazii.net\/user_data\/3286781625237089.jpg",
      "info": null,
      "address": "",
      "phone": "",
      "email": "",
      "job": "国際自動車整備士、IT Programmer",
      "birthday": "1996-05-19",
      "need": null,
      "country": "VN",
      "level": 1,
      "sex": 0,
      "facebook": ""
    },
    "language": {
      "id": 17,
      "name": "Vietnamese",
      "short": "vi",
      "country": "Vietnam"
    }
  }
};

$done({body: JSON.stringify(obj)});