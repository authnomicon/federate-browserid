exports = module.exports = function(resume, ceremony, store, authenticator) {
  
  return [
    require('body-parser').urlencoded({ extended: false }),
    ceremony.loadState('login'),
    function(req, res, next) {
      console.log('verify:');
      console.log(req.body);
      next();
    },
    // TODO: Don't do sessions here
    authenticator.authenticate('persona', { session: true, failWithError: true  }),
    function(req, res, next) {
      console.log('authenticated:');
      console.log(req.user);
      next();
    },
    resume
  ];
  
};

exports['@require'] = [
  '../../ceremony/resume',
  'http://i.bixbyjs.org/http/ua/flows/Dispatcher',
  'http://i.bixbyjs.org/http/ua/flows/StateStore',
  'http://i.bixbyjs.org/http/Authenticator'
];
