import React from "react";
import { connect } from "react-redux";
import { setOffline } from "../../ducks/images";
import "./Offline.css";

class Offline extends React.Component {
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

export default connect(mapStateToProps)(Offline);
