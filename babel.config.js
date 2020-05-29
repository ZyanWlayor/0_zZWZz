module.exports = function(api){
  api.cache.using(() => process.env.NODE_ENV)
  const isTest = api.env('test');
  let presets = [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "modules":false,
        "corejs":  { "version": 3, "proposals": true }
      }
    ]
  ];
  // if(isTest){
  //   presets.push('@babel/preset-typescript')
  // }
  return {
    presets,
    plugins:["@babel/plugin-transform-runtime"]
  }
}