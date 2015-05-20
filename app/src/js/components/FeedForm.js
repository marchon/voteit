var React = require('react');

var FeedForm = React.createClass({
  render: function () {
    var formStyles = {
      display: this.props.formDisplayed ? 'block' : 'none'
    };

    return (
        <form style={formStyles} id="feedForm" className="container">
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