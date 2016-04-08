import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  venue: DS.attr(),
  performance: DS.attr(),
  artist: DS.belongsTo('artist', {async: true})
});
