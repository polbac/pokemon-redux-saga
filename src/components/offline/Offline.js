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
    this.props.setOffline(!navigator.onLine);
  }
  render() {
    const { offline } = this.props;

    return offline ? (
      <div class="offline">:'( no hay conexión</div>
    ) : (
      <React.Fragment />
    );
  }
}

const mapStateToProps = state => ({
  offline: state.images.offline,
});

const mapDispatchToProps = dispatch => ({
  setOffline: state => dispatch(setOffline(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Offline);
