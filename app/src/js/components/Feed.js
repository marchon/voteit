var React         = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm      = require('./FeedForm'),
    FeedList      = require('./FeedList'),
    _             = require('lodash');

var Feed = React.createClass({
  getInitialState: function () {
    var FEED_ITEMS = [
      {key: '1', 'voteCount': 601, 'title': 'Java script is fun!', 'description': 'Lexical scoping'},
      {key: '2', 'voteCount': 602, 'title': 'CSS is awesome!', 'description': 'Makes your websites cool!'},
      {key: '3', 'voteCount': 603, 'title': 'HTML5 is the one!', 'description': 'Bundle up everything'}
    ];
    return {
      items: FEED_ITEMS,
      formDisplayed: false
    }
  },

  onToggleForm: function () {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },

  onNewItem: function (item) {
    var newItems = this.state.items.concat([item]);
    this.setState({
      items: newItems,
      formDisplayed: false,
      key: this.state.items.length
    });
  },

  onVote: function (item){
    var items = _.uniq(this.state.items);
    console.log(items);
    var index = _.findIndex(items, function(feedItems) {
      return feedItems.key === item.key;
    });
    console.log(index);
    var oldObj = items[index];
    console.log(oldObj);
    var newItems = _.pull(items, oldObj);
    console.log(newItems);
    newItems.push(item);
    console.log(newItems);
    this.setState({
      items: newItems
    });
  },

  render: function () {
    return (
        <div>
          <div className="container">
            <ShowAddButton onToggleForm={this.onToggleForm} displayed={this.state.formDisplayed}/>
          </div>

          <FeedForm formDisplayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>

          <br/>
          <br/>

          <FeedList items={this.state.items} onVote={this.onVote}/>
        </div>
    );
  }
});

module.exports = Feed;
