import { View } from 'backbone.marionette';
import { BaseModel } from '@helpscout-js/common/legacy';

const MyView = View.extend({
  className: 'bg-success',

  template: () => '<h1 style="color: red">Hello from Backbone!!!</h1>',

  regions: {
    myRegion: '.my-region',
  },

  modelEvents: {
    change: 'removeBackground',
  },

  removeBackground() {
    this.$el.removeClass('bg-success');
  },
});

const exampleView = new View({
  template: false,
  el: '#example',
  regions: {
    article: '#article-region',
  },
});

const model = new BaseModel({});

const myView = new MyView({ model });

exampleView.showChildView('article', myView);
setTimeout(() => {
  model.set('something', 3);
}, 1000);
