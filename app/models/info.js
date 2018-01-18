import DS from 'ember-data';

export default DS.Model.extend({
  additionalInfo: DS.attr('string'),
  ingredient: DS.belongsTo('ingredient'),
  editable: DS.attr('boolean')
});
