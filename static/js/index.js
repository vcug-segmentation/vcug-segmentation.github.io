window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Navbar burger toggle (harmless if there is no navbar)
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // One video per slide. infinite:false avoids cloned slides,
  // whose <video> copies often stay frozen on the first frame.
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: false,
    navigation: true,
    pagination: true,
    autoplay: false
  };

  var carousels = bulmaCarousel.attach('.carousel', options);

  // Make sure every video in the carousel is playing
  document.querySelectorAll('.carousel video').forEach(function (v) {
    var p = v.play();
    if (p && p.catch) { p.catch(function () {}); }
  });

  // Restart the video that comes into view
  carousels.forEach(function (c) {
    c.on('after:show', function () {
      c.element.querySelectorAll('video').forEach(function (v) {
        var p = v.play();
        if (p && p.catch) { p.catch(function () {}); }
      });
    });
  });

  bulmaSlider.attach();
});