window.$ = require('jquery');
window.jQuery = window.$;
require('jquery-migrate');
require('bootstrap');

require('../theme/theme.min.js');

Manager.ready(function() {
  Manager.log('app.js fired Manager.ready()');

  // Add additional logic here!
  // var theme = require('../theme/theme.js');
  // var currentUrl = window.location.href;
  if (window.location.pathname === '/') {
    import('../../../_src-uncompiled/vendor/slick-carousel/slick/slick.js')
      .then(function(mod) {
        import('../../../_src-uncompiled/js/hs.slick-carousel.js')
          .then(function(mod) {
            $('.js-slick-carousel').each(function() {
              console.log('---this', this);
              var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
            });
          })
      })


  }

});
