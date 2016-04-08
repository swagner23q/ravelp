import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('artist');
  },
  actions: {
    addArtist(params) {
      var newArtist = this.store.createRecord('artist', params);
      newArtist.save();
      this.transitionTo('add-artist');
    },
    update(artist, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          artist.set(key, params[key]);
        }
      });
      artist.save();
      this.transitionTo('add-artist');
    },
  }
});
