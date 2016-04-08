import Ember from 'ember';

export function artistPopularity(params) {
  var artist = params[0];

  if(artist.get('reviews').get('length') >= 3) {
    return Ember.String.htmlSafe('<i class="fa fa-heart"></i><i class="fa fa-heart"></i><i class="fa fa-heart"></i>');
  } else if (artist.get('reviews').get('length') >= 2) {
    return Ember.String.htmlSafe('<i class="fa fa-heart"></i><i class="fa fa-heart"></i>');
  } else if (artist.get('reviews').get('length') >= 1) {
    return Ember.String.htmlSafe('<i class="fa fa-heart"></i>');
  }
}
export default Ember.Helper.helper(artistPopularity);
