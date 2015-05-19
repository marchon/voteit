var React = require('React');

var FeedItem = React.createClass({
  render: function () {
    return (
        <div>
          <li className="list-group-item">
            <span className="badge">60</span>
            <h4>Test Content 1</h4>
            <span>Test Desc 1</span>
            <span className="pull-right">
               <button id="up" className="btn btn-xs btn-primary">&uarr;</button>
               <button id="down" className="btn btn-xs btn-primary">&darr;</button>
            </span>
          </li>
        </div>
    );
  }
});

module.exports = FeedItem;