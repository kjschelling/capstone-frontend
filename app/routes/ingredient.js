import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('ingredient',params.ingredient_id)
  },
  actions: {
    createInfo(info) {
      let newInfo = this.get('store').createRecord('info', info);
        newInfo.save()
          .then(() => this.get('flashMessages').success('Additional info created!'))
          .catch(() => {
              this.get('flashMessages').danger('Error creating info!');
      });
    },
    deleteInfo(info) {
        info.deleteRecord();
        info.save()
          .then(() => this.get('flashMessages').success('Additional info deleted!'))
          .catch(() => {
            this.get('flashMessages').danger('Additonal info not deleted.');
       });
    },
    updateInfo(info) {
        info.save();
        // need to build the object, right now only passing a string
      },
      deleteIngredient(ingredient) {
        ingredient.deleteRecord();
        ingredient.save();
        this.transitionTo('ingredients');
      }
    }
});
