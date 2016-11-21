exports = module.exports = function(verify) {
  var Strategy = require('passport-browserid');
  
  var strategy = new Strategy({ audience: 'http://localhost:8080' }, verify);
  return strategy;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/auth/Scheme';
exports['@scheme'] = 'browserid';
exports['@require'] = [
  './verifycb'
];
