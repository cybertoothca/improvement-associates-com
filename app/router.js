import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('contact-us');
  this.route('services');
  this.route('methods');
  this.route('about-us');
});

export default Router;
