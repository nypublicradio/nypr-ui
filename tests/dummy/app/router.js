import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('multi-card');
  this.route('card');
  this.route('brick');
  this.route('tabs');
  this.route('chrome');
  this.route('hero');
  this.route('svg');
  this.route('brand-header');
});

export default Router;
