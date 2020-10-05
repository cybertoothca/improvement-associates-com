/* eslint-env node */

module.exports = function (deployTarget) {
  var ENV = {
    build: {
      environment: "production",
    },
    s3: {
      bucket: "cdn.improvementassociates.com",
      filePattern:
        "**/*.{js,css,png,gif,ico,jpg,jpg-c200,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf}",
      profile: "improvementassociates",
      region: "us-west-2",
    },
    "s3-index": {
      bucket: "staging.improvementassociates.com",
      profile: "improvementassociates",
      region: "ca-central-1",
    },
  };

  if (deployTarget === "production") {
    ENV["s3-index"] = {
      bucket: "improvementassociates.com",
      profile: "improvementassociates",
      region: "ca-central-1",
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
