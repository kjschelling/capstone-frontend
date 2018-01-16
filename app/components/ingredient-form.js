import Ember from 'ember';

export default Ember.Component.extend({
  newIngredient: { // this is a property of the component
    name: null,
    note: null,
  },
  actions: {
    createIngredient () {
      this.sendAction('createIngredient', this.get('newIngredient'));
      this.set('newIngredient.name');
      this.set('newIngredient.note');
    }
    // sending the action up
  }
});
