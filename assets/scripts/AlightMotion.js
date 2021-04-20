var obj = JSON.parse($response.body);

obj= {
  "result" : {
    "result" : "success",
    "msTime" : 1605031824602,
    "accountCreatedMillis" : null,
    "licenses" : [
      {
        "period" : "1y",
        "orderNumber" : "CopyRight:👉Telegram: @AhmedoPlus👈|👉TikTok: @AhmedoPlus👈|👉Instagram: @AhmedoPlus👈",
        "benefits" : [
          "RemoveWatermark",
          "MemberEffects",
          "ProjectPackageSharing",
          "FutureMemberFeatures",
          "AdvancedEasing"
        ],
        "autoRenewing" : true,
        "productId" : "com.alightcreative.motion.sub.yearly",
        "details" : null,
        "valid" : true,
        "label" : null,
        "type" : "subscription",
        "expires" : 3802643889000,
        "store" : "apple_app_store"
      }
    ],
    "warnings" : [

    ]
  }
};

$done({body: JSON.stringify(obj)});