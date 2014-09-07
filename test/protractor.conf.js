exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/**/*.js'],
  capabilities: {
    browserName: 'firefox'
  },
//  multiCapabilities: [{
//    browserName: 'firefox'
//  }, {
//    browserName: 'chrome'
//  }]
}