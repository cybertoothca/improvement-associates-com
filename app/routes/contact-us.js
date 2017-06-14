import Ember from 'ember';
import ScrollToTop from '../mixins/routes/scoll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  titleToken: 'Contact Us'
});
