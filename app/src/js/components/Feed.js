var React         = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm      = require('./FeedForm'),
    FeedList      = require('./FeedList'),
    _             = require('lodash');

var Feed = React.createClass({
  getInitialState: function () {
    var FEED_ITEMS = [
      {id: '1', voteCount: 48, title: 'Java script is fun!', description: 'Lexical scoping'},
      {id: '2', voteCount: 7, title: 'CSS is awesome!', description: 'Makes your websites cool!'},
      {id: '3', voteCount: 67, title: 'HTML5 is the one!', description: 'Bundle up everything'}
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
      id: this.state.items.length
    });
  },

  onVote: function (item){
    var items = _.uniq(this.state.items);
    var index = _.findIndex(items, function(feedItems) {
      return feedItems.id === item.id;
    });
    var oldObj = items[index];
    var newItems = _.pull(items, oldObj);
    newItems.push(item);
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
