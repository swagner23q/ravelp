import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  genre: DS.attr(),
  image: DS.attr(),
  bio: DS.attr(),
  website: DS.attr()
  // reviews: DS.hasMany('review', { async: true})
});
