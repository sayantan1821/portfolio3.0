function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  class Cat extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        humor: 'happy'
      }
    }
    render() {
      return(
        <div>
          <h1>{this.props.name}</h1>
          <p>
            {this.props.color}
          </p>
        </div>
      );
    }
  }