TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    '': 'index',
    'boards/new': 'new',
    'boards/:id': 'show'
  },

  index: function () {
    TrelloClone.Collections.boards.fetch();

    var indexView = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.Collections.boards,
    });

    this._swapView(indexView);
  },

  new: function () {
    var newBoard = new TrelloClone.Models.Board();

    var formView = new TrelloClone.Views.BoardsForm({
      collection: TrelloClone.Collections.boards,
      model: newBoard
    });

    this._swapView(formView);
  },

  show: function (id) {
    var board = TrelloClone.Collections.boards.getOrFetch(id);

    var showView = new TrelloClone.Views.BoardsShow({
      model: board
    });

    this._swapView(showView);
  },

  _swapView: function (view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});
