import Ember from 'ember';

export default Ember.Component.extend({
  containerElementId: 'ember-magellan-container',
  enableCycling: true,

  model: null,
  models: Ember.computed({
    set: function(_, value) {
      if (value != null) {
        return Ember.A(value.copy());
      } else {
        return value;
      }
    }
  }),

  isFirstModel: Ember.computed('model', 'models.[]', function() {
    return this.get('model') === this.get('models.firstObject');
  }),

  isLastModel: Ember.computed('model', 'models.[]', function() {
    return this.get('model') === this.get('models.lastObject');
  }),

  enablePrevious: Ember.computed('isFirstModel', 'enableCycling', function() {
    return !this.get('isFirstModel') || this.get('enableCycling');
  }),

  enableNext: Ember.computed('isLastModel', 'enableCycling', function() {
    return !this.get('isLastModel') || this.get('enableCycling');
  }),

  disablePrevious: Ember.computed.not('enablePrevious'),
  disableNext: Ember.computed.not('enableNext'),

  _getPreviousModel: function() {
    if (this.get('isFirstModel')) {
      return this.get('models.lastObject');
    } else {
      return this._getModelAtOffset(-1);
    }
  },

  _getNextModel: function() {
    if (this.get('isLastModel')) {
      return this.get('models.firstObject');
    } else {
      return this._getModelAtOffset(1);
    }
  },

  _getModelAtOffset: function(offset) {
    var index = this.get('models').indexOf(this.get('model'));

    if (index < 0) {
      return this.get('models.firstObject');
    } else {
      return this.get('models').objectAt(index + offset);
    }
  },

  actions: {
    previous: function() {
      if (this.get('enablePrevious')) {
        this.set('model', this._getPreviousModel());
      }
    },

    next: function() {
      if (this.get('enableNext')) {
        this.set('model', this._getNextModel());
      }
    },

    close: function() {
      this.sendAction('onClose');
    }
  }
});
