import Ember from 'ember';

export default Ember.Component.extend({

  artistGenre: Ember.computed('artist.name', 'artist.genre', function() {
    return this.get('artist.name') + ' - ' + this.get('artist.genre');
  }),

  actions: {
    update(artist, params) {
      this.sendAction('update', artist, params);
    }
  }
});
