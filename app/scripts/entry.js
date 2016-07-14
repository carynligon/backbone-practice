import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';

Backbone.history.start();

$(document).ready(function() {
  location.hash = '#login';
});
