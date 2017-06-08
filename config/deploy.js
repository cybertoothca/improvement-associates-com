/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: 'production'
    },
    s3: {
      bucket: 'staging.improvementassociates.com',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,jpg-c200,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,html}',
      profile: 'improvementassociates',
      region: 'ca-central-1'
    }
    // include other plugin configuration that applies to all deploy targets here
  };


  // if (deployTarget === 'production') {
  //   ENV.build.environment = 'production';
  //   // configure other plugins for production deploy target here
  // }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
