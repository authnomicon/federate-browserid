exports = module.exports = function(verify) {
  var Strategy = require('passport-browserid');
  
  var trustedIssuers = [];
  //var trustedIssuers = [ 'gmail.login.persona.org' ];
  
  var strategy = new Strategy({ audience: 'http://localhost:8080', trustedIssuers: trustedIssuers }, verify);
  return strategy;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/auth/Scheme';
exports['@scheme'] = 'browserid';
exports['@require'] = [
  './verifycb'
];
