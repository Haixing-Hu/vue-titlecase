var assert = require("assert");
var titlecase = require("../../src/titlecase.js");

describe("titlecase", function() {

  it("single word", function() {
    assert.equal(titlecase("hello"), "Hello");
  });
  it("norml string", function() {
    assert.equal(titlecase("hello world"), "Hello World");
  });
  it("norml string with punctuations", function() {
    assert.equal(titlecase("hello, world!"), "Hello, World!");
  });
  it("norml string with minor world", function() {
    assert.equal(titlecase("i am a boy"), "I am a Boy");
  });
  it("norml string with acronyms", function() {
    assert.equal(titlecase("i love watching tV"), "I Love Watching TV");
    assert.equal(titlecase("This is my id."), "This is My ID.");
  });
  it("empty string", function() {
    assert.equal(titlecase(""), "");
  });
  it("null", function() {
    assert.equal(titlecase(null), "");
  });
  it("undefined", function() {
    var xxx = undefined;
    assert.equal(titlecase(xxx), "");
  });
});