var obj = JSON.parse($response.body);

obj = {
  "status": 1,
  "error": null,
  "secretKey": "st8Tc1JmNeE3HdBLgaPO",
  "data": {
    "premium": 1,
    "premiums": [{
      "id": "244",
      "user_id": "93467",
      "premium_type_id": "20",
      "start_time": "2017-01-21 08:01:09",
      "end_time": "2119-12-30 23:59:59",
      "renewal_date": "2019-12-30 22:44:34",
      "transaction_id": "730000401547360",
      "modify_by": "1",
      "push_remind": null
    }]
  },
  "api_version": "1.0"
};
$done({body: JSON.stringify(obj)});


