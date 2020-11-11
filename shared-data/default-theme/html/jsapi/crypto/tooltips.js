/* Crypto - Tooltips */

Mailpile.Crypto.Tooltips.KeyScore = function() {
  $('.searchkey-result-score').qtip({
    content: {
      title: false,
      text: function(event, api) {
        return (_.escape($(this).data('score_reason'))
          + '<small>{{_("Click For Details")|escapejs}}</small>');
      }
    },
    style: {
      classes: 'qtip-tipped',
      tip: {
        corner: 'left middle',
        mimic: 'left middle',
        border: 0,
        width: 10,
        height: 10
      }
    },
    position: {
      my: 'left center',
      at: 'right center',
      viewport: $(window),
      adjust: {x: 5, y: 2}
    },
    show: {event: 'mouseenter', delay: 0},
    hide: {event: 'click', inactive: 2000}
  });

  $('.crypto-key-import-pinned').qtip({
    content: {
      title: false,
      text: "{{_('Use this key with automatic updates disabled')|escapejs}}",
    },
    style: {
      classes: 'qtip-tipped',
      tip: {
        corner: 'bottom middle',
        mimic: 'bottom middle',
        border: 0,
        width: 10,
        height: 10
      }
    },
    position: {
      my: 'bottom center',
      at: 'top center',
      viewport: $(window),
      adjust: {x: 2, y: -5}
    },
    show: {event: 'mouseenter', delay: 0},
    hide: {event: 'click', inactive: 2000}
  });

};
