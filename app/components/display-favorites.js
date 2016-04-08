import Ember from 'ember';

export default Ember.Component.extend({
    favorites: Ember.inject.service(),
    actions: {
      removeFromFavorites(favorite) {
        this.get('favorites').remove(favorite);
      }
    }
});
