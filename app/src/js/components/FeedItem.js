var React = require('react');

var FeedItem = React.createClass({

  vote: function (count) {
    this.props.onVote({
      title: this.props.title,
      description: this.props.description,
      voteCount: count
    });
  },

  voteUp: function() {
    var count = this.props.voteCount;
    count = count + 1;
    this.vote(count);
  },

  voteDown: function() {
    var count = this.props.voteCount;
    count = count - 1;
    this.vote(count);
  },

  render: function () {
    return (
        <li className="list-group-item">
          <span className="badge badge-success">{this.props.voteCount}</span>
          <h4>{this.props.title}</h4>
          <span>{this.props.description}</span>
            <span className="pull-right">
               <button id="up" className="btn btn-xs btn-primary" onClick={this.voteUp}>&uarr;</button>
               <button id="down" className="btn btn-xs btn-primary" onClick={this.voteDown}>&darr;</button>
            </span>
        </li>
    );
  }
});

module.exports = FeedItem;
