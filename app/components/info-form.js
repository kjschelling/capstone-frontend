import Ember from 'ember';

export default Ember.Component.extend({
  newInfo: {
    additionalInfo: null,
    ingredient: null
  },
  actions: {
      createInfo (ingredient) {
      this.set('newInfo.ingredient', ingredient);
       this.sendAction('createInfo', this.get('newInfo'));


      // console.log(this.get('newInfo'))
       //from that creates a new info item
      }
    }
});
