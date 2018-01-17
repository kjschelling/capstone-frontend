import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      createInfo (newInfo) {
        this.sendAction('createInfo', newInfo);
      }
    }
});
