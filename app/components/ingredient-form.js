import Ember from 'ember';

export default Ember.Component.extend({
auth: Ember.inject.service(),
  newIngredient: { // this is a property of the component
    name: null,
    note: null,
  },
  actions: {
    createIngredient () {
      this.sendAction('createIngredient', this.get('newIngredient'));
      this.set('newIngredient.name', null);
      this.set('newIngredient.note', null);
    }
    // sending the action up to ingredient.hbs
  }
});
