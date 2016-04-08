import Ember from 'ember';

export default Ember.Component.extend({
  newArtistForm: false,
  actions: {
    newArtistFormShow(){
      this.set('newArtistForm', true);
    },
    addArtist(){
      var params = {
        name: this.get('name'),
        genre: this.get('genre'),
        bio: this.get('bio'),
        image: this.get('image'),
        website: this.get('website'),
      };
      this.set('newArtistForm', false);
      this.sendAction('addArtist', params);
    }
  }
});
