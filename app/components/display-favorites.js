import Ember from 'ember';

export default Ember.Component.extend({
    favorites: Ember.inject.service(),

    actions: {
      remove(favorite) {
        this.get('favorites').remove(favorite);
      }
    }
});
