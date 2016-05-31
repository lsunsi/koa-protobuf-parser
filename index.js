const parse = require('co-body');


function *defaultOnError() {
  this.status = 400;
}

module.exports = function(Proto, onError = defaultOnError) {
  return function *parser(next) {
    let success;

    try {
      const body = yield parse.text(this);
      this.message = Proto.decode(body);
      success = true;
    } catch (err) {
      success = false;
    }

    if (success) yield next;
    else yield onError;
  }
}
