import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('multi-card');
  this.route('card');
  this.route('brick');
  this.route('tabs');
});

export default Router;
