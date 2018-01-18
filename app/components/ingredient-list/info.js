import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    actions: {
      deleteInfo (info) {
       this.sendAction('deleteInfo', info) // passes this to the next up component
      // ingredient-list
    },
      updateInfo (info) {
       this.sendAction('updateInfo', info)
  }
}
});
