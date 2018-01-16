import Ember from 'ember';

export default Ember.Route.extend({
  model () { //this is a model hook
    return this.get('store').findAll('ingredient') // findAll makes a GET request to /ingredients
  }


  // actions: {
  //   createIngredient(ingredient) {
  //     let newIngredient = this.get('store').createRecord('ingredient', ingredient);
  //     newList.save();
  //   }
  // }
});
