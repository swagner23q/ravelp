import Ember from 'ember';

export default Ember.Component.extend({
  updateArtist: false,
  actions: {
    updateArtist() {
      this.set('updateArtist', true);
    },
    update(artist) {
      var params = {
        name: this.get('name'),
        genre: this.get('genre'),
        bio: this.get('bio'),
        image: this.get('image'),
        website: this.get('website'),
      };
      this.set('updateArtist', false);
      this.sendAction('update', artist, params);
    }
  }
});
