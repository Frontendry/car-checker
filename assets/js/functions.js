(function ($, window, document, undefined) {
  "use strict";

  const app = {
    appinit: () => {
      app.flexsliderInit();
    },
    flexsliderInit: () => {
      jQuery(".flexslider").flexslider({
        animation: "slide",
        controlNav: "thumbnails",
      });
    },
  };

  jQuery(document).ready(() => {
    app.appinit();
  });
})();
