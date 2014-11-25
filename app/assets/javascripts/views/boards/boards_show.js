TrelloClone.Views.BoardsShow = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['boards/show'],

  render: function () {
    var renderedContent = this.template({
      board: this.model
    });
    debugger
    this.$el.html(renderedContent);
    return this;
  }
});
