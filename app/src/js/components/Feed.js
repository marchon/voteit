var React = require('React'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList');

var Feed = React.createClass({
  render: function () {
    return (
        <div>
          <div className="container">
            <ShowAddButton />
          </div>

          <FeedForm />

          <FeedList />
        </div>
    );
  }
});

module.exports = Feed;