var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList');

var Feed = React.createClass({
  getInitialState: function () {
    var items = [
      {'id': 1, 'title': 'title one', 'description': 'desc one'},
      {'id': 2, 'title': 'title two', 'description': 'desc two'},
      {'id': 3, 'title': 'title three', 'description': 'desc three'}
    ];
    return {
      feedItems: items
    }
  },

  render: function () {
    return (
        <div>
          <div className="container">
            <ShowAddButton />
          </div>

          <FeedForm />

          <FeedList items={this.state.feedItems}/>
        </div>
    );
  }
});

module.exports = Feed;