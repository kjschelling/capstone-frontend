import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('ingredient',params.ingredient_id)
  },
  actions: {
    createInfo(info) {
      let newInfo = this.get('store').createRecord('info', info);
      newInfo.save();
    },//actions are saved at the route so createInfo.js was passed up from info.js
    //to be saved here in routes/ingredient.js
    deleteInfo(info) {
        info.destroyRecord(info);
    }
  }
});
