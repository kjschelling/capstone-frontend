import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      createInfo (newInfo) {
        this.sendAction('createInfo', newInfo);
      },
        deleteInfo (info) {
        return this.sendAction('deleteInfo', info) // passes this to the next up component
        // ingredient
      }
    }
});
