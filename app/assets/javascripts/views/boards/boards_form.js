TrelloClone.Views.BoardsForm = Backbone.View.extend({

  template: JST['boards/form'],

  render: function () {
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
