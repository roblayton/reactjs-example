var PrototypeForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    var content = React.findDOMNode(this.refs.content).value.trim();
    if (!title || !content) {
      return;
    }

    // TODO: send request to the server
    this.props.onPrototypeSubmit({title: title, content: content});
    var title = React.findDOMNode(this.refs.title).value = '';
    var content = React.findDOMNode(this.refs.content).value = '';
  },
  render: function() {
    return (
      <form className="prototypeForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref="title" />
        <input type="text" placeholder="Content" ref="content" />
        <input type="submit" value="Post" />
      </form>
    )
  }
});

