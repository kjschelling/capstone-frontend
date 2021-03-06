import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  note: DS.attr('string'),
  infos: DS.hasMany('info'),
  editable: DS.attr('boolean')
});
