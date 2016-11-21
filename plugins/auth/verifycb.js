exports = module.exports = function() {
  
  return function verifyBrowserID(email, issuer, done) {
    console.log('X BROWSERID AUTH! - ' + email);
    return done(null, { email: email }, { issuer: issuer });
  };
};

exports['@require'] = [];
