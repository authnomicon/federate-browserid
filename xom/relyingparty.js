// TODO: Make sure that the interface declared here can be used even when the ID is overlapped
//       to other relyingparties ()
// IoC.use('login', require('nodex-aaa-login-browserid'));
// IoC.use('login', require('nodex-aaa-login-openid'));

exports = module.exports = function(serializeClientCb, deserializeClientCb, s) {
  var RelyingParty = require('../lib/rp/standard');
  
  var rp = new RelyingParty();
  return rp;
};

exports['@implements'] = 'http://schema.modulate.io/js/aaa/login/browserid/RelyingParty';
exports['@singleton'] = true;
exports['@require'] = [
  './szx/serializeclientcb',
  './szx/deserializeclientcb',
  'http://i.bixbyjs.org/http/ua/flows/StateStore'
];
