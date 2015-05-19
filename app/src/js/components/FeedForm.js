var React = require('React');

var FeedForm = React.createClass({
  render: function () {
    return (
        <form className="container">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Title"/>
            <input type="text" className="form-control" placeholder="Description"/>
            <button className="btn btn-primary btn-block">Add</button>
          </div>
        </form>
    );
  }
});

module.exports = FeedForm;