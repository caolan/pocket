(function() {
  
  window.hoodie = new Hoodie("/_api");

  window.hoodie.extend("admin", Hoodie.Admin);

  Backbone.Layout.configure({
    manage: true,
    fetch: function(path) {
      return Handlebars.VM.template(JST[path]);
    }
  });

  jQuery(document).ready(function() {
    return new Pocket;
  });

}).call(this);
