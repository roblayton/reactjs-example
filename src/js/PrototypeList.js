var PrototypeList = React.createClass({
  render: function() {
    var prototypeNodes = this.props.data.map(function (prototype) {
      return (
        <Prototype title={prototype.title}>
          {prototype.content}
        </Prototype>
      );
    });
    return (
      <div className="prototypeList">
        {prototypeNodes}
      </div>
    );
  } 
});

