import Ember from 'ember';

export default Ember.Component.extend({
  newIngredient: { // this is a property of the component
    name: null,
    note: null,
  },
  actions: {
    createIngredient () {
      this.sendAction('createIngredient', this.get('newIngredient'));
    }
    // sending the action up to ingredient.hbs
  }
});
