var React = require('react');

var FeedItem = React.createClass({
  render: function () {
    return (
        <li className="list-group-item">
          <span className="badge">60</span>
          <h4>{this.props.title}</h4>
          <span>{this.props.description}</span>
            <span className="pull-right">
               <button id="up" className="btn btn-xs btn-primary">&uarr;</button>
               <button id="down" className="btn btn-xs btn-primary">&darr;</button>
            </span>
        </li>
    );
  }
});

module.exports = FeedItem;