var React = require('React'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({
  render: function () {
    var feedItems = this.props.items.map(function (item) {
      return <FeedItem title={item.title} description={item.description} />
    });

    return (
        <ul className="list-group">{feedItems}</ul>
    );
  }
});

module.exports = FeedList;