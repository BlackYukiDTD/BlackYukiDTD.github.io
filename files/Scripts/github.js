let config = {
  username: "BlackYukiDTD", 
  token: "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 ", 
};

// load user prefs from box
const boxConfig = $persistentStore.read("github_private_repo");
if (boxConfig) {
  config = JSON.parse(boxConfig);
}

const username = $request.url.match(
  /https:\/\/(?:raw|gist)\.githubusercontent\.com\/([^\/]+)\//
)[1];
// rewrite headers for a specific user
if (username == config.username) {
  console.log(`ACCESSING PRIVATE REPO: ${$request.url}`);
  $done({ ...$request.headers, Authorization: `token ${config.token}` });
} else $done({});
