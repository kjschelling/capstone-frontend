import Ember from 'ember';

export default Ember.Route.extend({
auth: Ember.inject.service(),
  model () { //this is a model hook
    return this.get('store').findAll('ingredient') // findAll makes a GET request to /ingredients
  },
  actions: {
    createIngredient(ingredient) {
      let newIngredient = this.get('store').createRecord('ingredient', ingredient);
      newIngredient.save()
      .then(() => this.get('flashMessages').success('Ingredient created!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Error creating ingredient.');
    });
  }
}
});
