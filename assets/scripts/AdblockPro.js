var obj = JSON.parse($response.body);

obj = {
  "v": true,
  "s": 1,
  "x": 1,
  "t": 1,
  "p": 1,
  "m": 3,
  "i": 1,
  "c": "EE0185",
  "f": 1,
  "r": "",
  "a": "",
  "e": 1
};

$done({body: JSON.stringify(obj)});