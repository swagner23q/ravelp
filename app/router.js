import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artist', {path: '/artist/:artist_id'});
  this.route('add-artist');
});

export default Router;
