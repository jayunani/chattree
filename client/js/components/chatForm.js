let React = require('react');
let ReactDOM = require('react-dom')
let ChatForm = React.createClass({
  post: function(data) {
    return $.ajax({
      type: 'POST',
      url: this.props.url,
      crossDomain: true,
      data: JSON.stringify(data),
      contentType: 'application/json'
    })
  },

  handle: function(e) {
    e.preventDefault();
    let data = {
      message: ReactDOM.findDOMNode(this.refs.message).value.trim(),
      created_by: 'Groot',
    };
    ReactDOM.findDOMNode(this.refs.message).value = '';
    let that = this;
    this.post(data).done(function(res) {
      console.log('this is our respose',res)
      that.props.update(res);
    });
  },

  render: function() {
    return (
      <form id="chat-form" onSubmit={this.handle}>
        <input type="text" ref="message" />
        <input type="submit" className="hidden" />
      </form>
    );
  }
});

module.exports = ChatForm;