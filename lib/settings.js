var settings = {

  /**
   * The current defautls set
   */
  _defaults: {},

  /**
   * The current values (of managed properties only)
   */
  _values: {},

  /**
   * Set a default on this object
   */
  setDefault: function (key, value) {
    this._values[key] = this[key];
    this._defaults[key] = value;
    Object.defineProperty(this, key, {
      get: function () {
        var undef = typeof this._values[key] === 'undefined';
        return undef ? this._defaults[key] : this._values[key];
      },
      set: function (value) {
        this._values[key] = value;
      }
    });
  },

  /**
   * Set defaults as an object on this settings object
   */
  setDefaults: function (params) {
    for (var key in params) {
      this.setDefault(key, params[key]);
    }
  }

};

module.exports = {

  /**
   * For creating a new settings object
   */
  create: function (defaults) {
    var o = Object.create(settings);
    defaults && o.setDefaults(defaults);
    return o;
  }

};
