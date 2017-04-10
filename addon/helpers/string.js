import Ember from 'ember';

export function string([ thing ]/*, hash*/) {
  return String(thing);
}

export default Ember.Helper.helper(string);
