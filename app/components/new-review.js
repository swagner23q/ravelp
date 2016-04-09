import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow(){
      this.set('addNewReview', true);
    },
    saveReview(){
      var params = {
        user: this.get('user'),
        venue: this.get('venue'),
        rating: this.get('rating'),
        performance: this.get('performance'),
        artist: this.get('artist')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
