var PrototypeBox = React.createClass({
  loadPrototypesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data:data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handlePrototypeSubmit: function(prototype) {
    // update optimistically
    var prototypes = this.state.data;
    prototypes.push(prototype);
    this.setState({data: prototypes}, function() {
      // actual request
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: prototype,
        success: function(resp) {
          console.log(resp);
        },
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadPrototypesFromServer();
    setInterval(this.loadPrototypesFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="prototypeBox">
        <h1>Prototypes</h1>
        <PrototypeList data={this.state.data} />
        <PrototypeForm onPrototypeSubmit={this.handlePrototypeSubmit} />
      </div>
    );
  }
});

