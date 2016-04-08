import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('artist', params.artist_id);
  },
  actions: {
   saveReview(params) {
     var newReview = this.store.createRecord('review', params);
     var artist = params.artist;
     artist.get('reviews').addObject(newReview);
     newReview.save().then(function() {
       return artist.save();
     });
     this.transitionTo('artist', params.artist);
   }
 }
});
