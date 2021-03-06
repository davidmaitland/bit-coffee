/**
 * People
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'STRING',
      required: true
    },

    email: {
      type: 'STRING',
      required: true
    },

    beans: {
      type: 'decimal'
    }

  },

  // Lifecycle Callbacks
  beforeCreate: function(values, next) {
    values.beans = 10.0;
    next();
  }

};
