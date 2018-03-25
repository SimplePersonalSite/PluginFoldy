var Foldy = Util.createSingleton('Foldy', function() {
});

Foldy.plugin = function plugin(app) {
  setInterval(Foldy.getInstance().update.bind(Foldy.getInstance()), 200);
  SimplePersonalSite.Util.linkCss('plugins/PluginFoldy.css');
};

/**
 * Look for elements that should have foldy behavior added, and add the behavior.
 */
Foldy.prototype.update = function update() {
  $('div.foldy-div').each(function() {
    var start = $(this);
    var end = start.nextAll('#'+start.attr('id')+'-close');
    if (end.length == 0) {
      console.error('No closing element found for id=' + start.attr('id'));
    } else {
      // place elements between start and end as children of start.
      var between = start.nextUntil(end);
      end.remove();
      start.append(between);

      // add toggle dongy (show/hide)
      var toggle = $('<p id="' + start.attr('id') + '-toggle' +
          '"><a class="foldy-hide">hide</a><a>show</a></p>');
      toggle.insertBefore(start);
      if (!start.hasClass('foldy-hide')) {
        Foldy.toggle(toggle.children('a'));
      }

      // do stuff when show/hide is clicked
      toggle.click(function() {
        var children = toggle.children('a');
        Foldy.toggle(children);
        Foldy.toggle(start);
      });
    }
    start.removeClass('foldy-div');
    start.addClass('foldy-div-found');
  });

  $('.foldy-next').each(function() {
    var marker = $(this);

    // find next element
    var itr = marker;
    while (!itr.is('body') && itr.next().length === 0) {
      itr = $(itr.parent());
    }
    var next = itr.next();

    if (next.length == 0) {
      console.error('No element after', marker);
    } else {
      // add toggle dongy (show/hide)
      var toggle = $('<a class="foldy-hide">show</a><a>hide</a>');
      marker.append(toggle);
      if (marker.hasClass('foldy-hide')) {
        Foldy.toggle(toggle);
        Foldy.toggle(next);
      }

      // do stuff when show/hide is clicked
      toggle.click(function() {
        Foldy.toggle(toggle);
        Foldy.toggle(next);
      });
    }
    marker.removeClass('foldy-next');
    marker.removeClass('foldy-hide');
  })
};

/**
 * Toggle the visibility of the foldy elements.
 */
Foldy.toggle = function toggle(elms) {
  elms = $(elms);
  var hidden = elms.filter('.foldy-hide');
  var shown = elms.not('.foldy-hide');
  hidden.removeClass('foldy-hide');
  shown.addClass('foldy-hide');
};
