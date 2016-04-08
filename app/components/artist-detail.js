import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(favorite) {
      this.get('favorites').add(favorite);
    }
  }

});
