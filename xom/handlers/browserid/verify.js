exports = module.exports = function(/*resume,*/ ceremony, store /*, authenticator*/) {
  
  return [
    require('body-parser').urlencoded({ extended: false }),
    ceremony.loadState('login'),
    function(req, res, next) {
      console.log('verify:');
      console.log(req.body);
      next();
    },
    // TODO: Don't do sessions here
    //authenticator.authenticate('browserid', { session: true, failWithError: true  }),
    function(req, res, next) {
      console.log('authenticated:');
      console.log(req.user);
      console.log(req.authInfo);
      next();
    },
    function(err, req, res, next) {
      console.log('err:');
      console.log(err);
      console.log(err.stack)
      next(err);
    },
    //resume
  ];
  
};

exports['@require'] = [
  //'login/activity/login/resume',
  'http://i.bixbyjs.org/http/state/Dispatcher',
  'http://i.bixbyjs.org/http/workflow/StateStore',
  //'http://i.bixbyjs.org/http/Authenticator'
];
