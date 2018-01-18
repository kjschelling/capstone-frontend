import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateInfo () {
      this.sendAction('updateInfo', this.get('info'));
      // sending the action up to the next up component ingredient-list
      // this inside a component action is referencing that component
    }
  }
});
