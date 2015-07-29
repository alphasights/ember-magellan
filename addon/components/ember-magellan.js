import Ember from 'ember';

export default Ember.Component.extend({
  containerElementId: 'ember-magellan-container',
  model: null,
  models: null,

  actions: {
    close: function() {
      this.sendAction('onClose');
    }
  }
});
