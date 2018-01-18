import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      createInfo (newInfo) {
        this.sendAction('createInfo', newInfo);
      },
      deleteInfo (info) {
        this.sendAction('deleteInfo', info) // passes this to the next up component
        // ingredient
      },
      updateInfo (info) {
        this.sendAction('updateInfo', info)
    }
      // deleteIngredient(ingredient) {
      //   this.sendAction('deleteIngredient', ingredient)
      // }
  }
});
