import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    actions: {
      createInfo (info) {
      return this.sendAction('createInfo', info) // passes this to the next up component
      // ingredient-list
      },
    }
});
