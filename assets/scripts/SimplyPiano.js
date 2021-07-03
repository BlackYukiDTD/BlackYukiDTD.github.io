var obj = JSON.parse($response.body);

obj = {
    "error":null,
    "accountInfo":{
      "accountID": "ACC5F59D6B6845EE6.95899358",
    "email": "lil.love195@gmail.com",
    "role": "Pending",
    "hasPassword": false,
    "personalInfo": {
      "firstName": "Đạt",
      "lastName": "Dương Tiến",
      "city": null,
      "state": null,
      "country": null,
      "phone": null,
      "facebookID": "1530152920526519"
    },
      "registrationTime":"2021-03-28 04:23:18",
      "EmailVerificationTime":null,
      "membershipInfo":{
        "membershipType":"JOYTUNESBUNDLE",
        "dateStarted":"2021-03-28",
        "daysRemaining":7,
        "daysPassed":1,
        "autoRenewable":1,
        "isAutoRenew":true,
        "isTrialPeriod":1,
        "planDuration":"oneyear",
"currentIapID":"com.joytunes.asla.oneyearpremiummembership_trial_PP3612150usd_individual_bundle",
"familyIapID":"com.joytunes.asla.oneyearpremiummembership_trial_PP3612150usd_bundle_family",
        "dateExpire":"2999-04-04",
        "membershipDescription":"Hack by Dương Tiến Đạt",
        "membershipTier":"premium_home"
        },
      "openProductIDs":[],
      "seenApps":{
        "SimplyPiano":"15316"
        }
      },
   "shouldFinalizeTransaction":true
};
    

$done({body: JSON.stringify(obj)});