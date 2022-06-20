'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('chartjs-graphs')
      .service('myService')
      .getWelcomeMessage();
  },
};
