exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.spec.js'],
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl:'http://localhost:9000/',
  rootElement:'html'
}