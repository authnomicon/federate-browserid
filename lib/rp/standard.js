// TODO: Just pass the Verifier from local-verify directly here

function StandardRelyingParty() {
}

StandardRelyingParty.prototype.lookup = function() {
  console.log('LOOKUP!');

}


module.exports = StandardRelyingParty;
