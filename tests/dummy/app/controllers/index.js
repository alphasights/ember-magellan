import Ember from 'ember';

export default Ember.Controller.extend({
  selectedProject: null,

  projects: Ember.A([
    Ember.Object.create({
      name: "Manhattan"
    }),

    Ember.Object.create({
      name: "Mayhem"
    }),

    Ember.Object.create({
      name: "Infinity"
    }),

    Ember.Object.create({
      name: "Spartan"
    })
  ]),

  actions: {
    showProject: function(project) {
      this.set('selectedProject', project);
    }
  }
});
