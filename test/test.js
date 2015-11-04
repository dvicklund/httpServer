var mocha = require('mocha');
var chai = require('chai');
chai.use(require('chai-http'));
var url = "http://localhost:3000";

describe('server.js', function() {
  it('should accept a request at "/" with status code 200', function(done) {
    chai.request(url).get('/').end(function(err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    })
    done();
  })

  it('should return a time from "/time"', function() {

  })
})

