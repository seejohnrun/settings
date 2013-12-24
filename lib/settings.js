var settings = {

  _defaults: {},

  _values: {},

  setDefault: function (key, value) {
    this._values[key] = this[key]
    this._defaults[key] = value
    Object.defineProperty(this, key, {
      get: function () {
        var undef = typeof this._values[key] === 'undefined'
        return undef ? this._defaults[key] : this._values[key]
      },
      set: function (value) {
        this._values[key] = value
      }
    });
  }

};

module.exports = {
  create: function () {
    return Object.create(settings)
  }
};
