window.onload = function() {
    ReactDOM.render(<ReactPopup />, document.getElementById('popupContainer'));
    document.querySelector('button').addEventListener('click', openPopup);
  }
  
  function openPopup() {
    if(typeof Popup == "undefined") {
      return;
    }
    Popup.open(<div>
        <div className="body">Mon message</div>
        <div className="footer">
          <button className="btn default" onClick={() => Popup.close()}>Cancel</button>
        </div>
      </div>);
  }
  
  class ReactPopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        content: ""
      };
      this.open  = this.open.bind(this);
      this.close = this.close.bind(this);
    }
    componentDidMount() {
      window.Popup = this;
      if(this.props.onready && typeof this.props.onready == "function") {
        this.props.onready.call();
      }
    }
    open(content) {
      this.setState({
        active: true,
        content: content
      });
    }
    close() {
      this.setState({
        active: false
      });
    }
    update(content) {
      this.setState({
        content: content
      });
    }
    render() {
      return <div id="popup" className={this.state.active ? "in" : ""}>
        <div className="bg"></div>
        <div className="modal">
          <div className="close" onClick={this.close}>&times;</div>
          {this.state.content}
        </div>
      </div>;
    }
  }