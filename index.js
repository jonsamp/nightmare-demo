const Nightmare = require("nightmare");
var should = require("chai").should();

describe("Codecademy", function() {
  this.timeout(15000); // Set timeout to 15 seconds, instead of the original 2 seconds

  describe("Home page", function() {
    it("should show header title", function(done) {
      new Nightmare({ show: true })
        .goto("https://www.codecademy.com/")
        .evaluate(function() {
          return document.querySelector("h1").innerText;
        })
        .end()
        .then(function(result) {
          result.should.equal("Learn to code interactively, for free.");
          done();
        })
        .catch(err => {
          console.error(err);
          done();
        });
    });
  });
});
