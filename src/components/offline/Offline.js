import React from "react";
import { connect } from "react-redux";
import { setOffline } from "../../ducks/images";
import "./Offline.css";

class Offline extends React.Component {
  componentDidMount() {
    window.addEventListener("online", this.updateInternetStatus.bind(this));
    window.addEventListener("offline", this.updateInternetStatus.bind(this));
  }
  updateInternetStatus(event) {
    this.props.offline(!navigator.onLine);
  }
  render() {
    return <div class="offline">:'( no hay conexión</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  offline: state => dispatch(setOffline(state)),
});

export default connect(null, mapDispatchToProps)(Offline);
