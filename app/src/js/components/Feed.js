var React         = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm      = require('./FeedForm'),
    FeedList      = require('./FeedList');

var Feed = React.createClass({
  getInitialState: function () {
    var items = [
      {key: '1', 'voteCount': 601, 'title': 'Java script is fun!', 'description': 'Lexical scoping'},
      {key: '2', 'voteCount': 602, 'title': 'CSS is awesome!', 'description': 'Makes your websites cool!'},
      {key: '3', 'voteCount': 603, 'title': 'HTML5 is the one!', 'description': 'Bundle up everything'}
    ];
    return {
      feedItems: items,
      formDisplayed: false
    }
  },

  onToggleForm: function () {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },

  onNewitem: function (item) {
    var newItems = this.state.feedItems.concat([item]);
    this.setState({
      feedItems: newItems
    });
  },

  onVote: function (item){
    console.log(item.voteCount);
  },

  render: function () {
    return (
        <div>
          <div className="container">
            <ShowAddButton onToggleForm={this.onToggleForm} displayed={this.state.formDisplayed}/>
          </div>

          <FeedForm formDisplayed={this.state.formDisplayed} onNewItem={this.onNewitem}/>

          <br/>
          <br/>

          <FeedList items={this.state.feedItems} onVote={this.onVote}/>
        </div>
    );
  }
});

module.exports = Feed;
