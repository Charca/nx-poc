import Backbone from 'backbone';

export const BaseModel = Backbone.Model.extend({
  url: 'http://localhost:3333/api',
});
