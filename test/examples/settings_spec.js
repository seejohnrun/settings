var assert = require('assert');
var settings = require('../../lib/settings');

describe(settings, function () {

  describe('no default', function () {

    before(function () {
      this.o = settings.create();
    });

    it('should have undefined value by default', function () {
      assert.strictEqual(this.o.h, undefined);
    });

    it('should be able to set a value', function () {
      var value = 5;
      this.o.h = value;
      assert.strictEqual(this.o.h, value);
    });

  });

  describe('with a default', function () {

    var defaultValue = 1;

    before(function () {
      this.o = settings.create();
      this.o.setDefault('h', defaultValue);
    });

    it('should get the default by default', function () {
      assert.strictEqual(this.o.h, defaultValue);
    });

    it('should be able to override the default', function () {
      this.o.h = null;
      assert.strictEqual(this.o.h, null);
    });

    it('should be able to rever to default', function () {
      this.o.h = 123; // something else
      this.o.h = undefined;
      assert.strictEqual(this.o.h, defaultValue);
    });

  });

  describe('existing before a default', function () {

    var value = 5;

    before(function () {
      this.o = settings.create();
      this.o.h = value;
      this.o.setDefault(value + 10000); // some other number
    });

    it('should keep the original value', function () {
      assert.strictEqual(this.o.h, value);
    });

  });

});
