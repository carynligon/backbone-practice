import $ from 'jquery';
import Backbone from 'backbone';
import Links from '../models/links';

const apiURLLinks = 'https://tiny-za-server.herokuapp.com/collections/TextPressLinks';

const LinksColllection = Backbone.Collection.extend({
  url: apiURLLinks,
  model: Links
});

export default LinksColllection;
