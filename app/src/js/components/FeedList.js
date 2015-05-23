var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({
  render: function () {
    var feedItems = this.props.items.map(function (item) {
      //console.log(item.id);
      return <FeedItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          voteCount={item.voteCount}
          onVote={this.props.onVote}/>
    }.bind(this));

    return (
        <ul className="list-group container">
          {feedItems}
        </ul>
    );
  }
});

module.exports = FeedList;
