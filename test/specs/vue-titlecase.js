var assert = require("assert");
var Vue = require("vue");
var Titlecase = require("../../src/vue-titlecase.js");

describe("vue-titlecase", function() {

  before(function() {
    Vue.use(Titlecase);
  });

  describe("String.prototype.toTitleCase()", function() {
    it("single word", function() {
      assert.equal("hello".toTitleCase(), "Hello");
    });
    it("norml string", function() {
      assert.equal("hello world".toTitleCase(), "Hello World");
    });
    it("norml string with punctuations", function() {
      assert.equal("hello, world!".toTitleCase(), "Hello, World!");
    });
    it("norml string with minor world", function() {
      assert.equal("i am a boy".toTitleCase(), "I am a Boy");
    });
    it("norml string with acronyms", function() {
      assert.equal("i love watching tV".toTitleCase(), "I Love Watching TV");
      assert.equal("This is my id.".toTitleCase(), "This is My ID.");
    });
    it("empty string", function() {
      assert.equal("".toTitleCase(), "");
    });
  });

  describe("titlecase filter", function() {

    it("single word", function(done) {
      var ViewModel = Vue.extend({
        template: "<div>{{msg | titlecase}}</div>",
        data: function() {
          return {
            msg: "hello"
          };
        },
        el: function() {
          var el = document.createElement("div");
          el.id = "single-word";
          document.body.appendChild(el);
          return el;
        }
      });
      var vm = new ViewModel();
      vm.$nextTick(function() {
        var el = document.querySelector("#single-word");
        assert.equal(el.textContent, "Hello");
        done();
      });
    });

    it("norml string", function(done) {
      var ViewModel = Vue.extend({
        template: "<div>{{msg | titlecase}}</div>",
        data: function() {
          return {
            msg: "hello world"
          };
        },
        el: function() {
          var el = document.createElement("div");
          el.id = "normal-string";
          document.body.appendChild(el);
          return el;
        }
      });
      var vm = new ViewModel();
      vm.$nextTick(function() {
        var el = document.querySelector("#normal-string");
        assert.equal(el.textContent, "Hello World");
        done();
      });
    });

    it("norml string with punctuations", function(done) {
      var ViewModel = Vue.extend({
        template: "<div>{{msg | titlecase}}</div>",
        data: function() {
          return {
            msg: "hello, world!"
          };
        },
        el: function() {
          var el = document.createElement("div");
          el.id = "normal-string-punct";
          document.body.appendChild(el);
          return el;
        }
      });
      var vm = new ViewModel();
      vm.$nextTick(function() {
        var el = document.querySelector("#normal-string-punct");
        assert.equal(el.textContent, "Hello, World!");
        done();
      });
    });

    it("norml string with minor world", function(done) {
      var ViewModel = Vue.extend({
        template: "<div>{{msg | titlecase}}</div>",
        data: function() {
          return {
            msg: "i am a boy"
          };
        },
        el: function() {
          var el = document.createElement("div");
          el.id = "normal-string-minor";
          document.body.appendChild(el);
          return el;
        }
      });
      var vm = new ViewModel();
      vm.$nextTick(function() {
        var el = document.querySelector("#normal-string-minor");
        assert.equal(el.textContent, "I am a Boy");
        done();
      });
    });

    it("norml string with acronyms", function(done) {
      var ViewModel = Vue.extend({
        template: "<div>{{msg | titlecase}}</div>",
        data: function() {
          return {
            msg: "i love watching tV. this is my id."
          };
        },
        el: function() {
          var el = document.createElement("div");
          el.id = "normal-string-acronyms";
          document.body.appendChild(el);
          return el;
        }
      });
      var vm = new ViewModel();
      vm.$nextTick(function() {
        var el = document.querySelector("#normal-string-acronyms");
        assert.equal(el.textContent, "I Love Watching TV. This is My ID.");
        done();
      });
    });

    it("empty string", function(done) {
      var ViewModel = Vue.extend({
        template: "<div>{{msg | titlecase}}</div>",
        data: function() {
          return {
            msg: ""
          };
        },
        el: function() {
          var el = document.createElement("div");
          el.id = "empty-string";
          document.body.appendChild(el);
          return el;
        }
      });
      var vm = new ViewModel();
      vm.$nextTick(function() {
        var el = document.querySelector("#empty-string");
        assert.equal(el.textContent, "");
        done();
      });
    });

  });
});
