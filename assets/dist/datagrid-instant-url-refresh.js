// Generated by CoffeeScript 1.12.7
(function() {
  $(function() {
    if ($('.datagrid').length) {
      return $.nette.ajax({
        type: 'GET',
        url: $('.datagrid').first().data('refresh-state')
      });
    }
  });

}).call(this);
