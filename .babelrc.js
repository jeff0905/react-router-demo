
module.exports = {
  "presets": [
    [  
      '@babel/env',
      {
        loose: true,
        modules: false,
        forceAllTransforms: true,
      },
    ],
    "@babel/react",
    "@babel/stage-2"
  ]
}