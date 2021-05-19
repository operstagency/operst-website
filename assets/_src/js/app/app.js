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
  } else if (window.location.pathname.includes('/contact')) {

    import('slapform')
      .then(function(mod) {
        var slapform = mod.default;
        console.log('---slapform', slapform);
      })

    // Manager.auth().ready(function () {
    //   var user = firebase.auth().currentUser;
    //   var submitBtn = Manager.dom().select('#submit-button');
    //   Manager.dom().select('input[name="uid"]').setValue(user ? user.uid : '');
    //   submitBtn.removeAttribute('disabled').removeClass('disabled')
    //   Manager.dom().select('#contact-form').on('submit', function (event) {
    //     submitBtn.setAttribute('disabled', true).addClass('disabled')
    //   })
    //
    //   Manager.dom().select('#contact-form').on('submit', function (event) {
    //     console.log('----EVENT', event);
    //   })
    //
    // })
  }

});
