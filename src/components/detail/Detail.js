import React from "react";
import { connect } from "react-redux";
import nasaClient from "../../client/pokemonClient";
import Preloading from "../preloading/Preloading";
import {
  DetailContainer,
  DetailInfoContainer,
  CloseButton,
} from "./DetailStyles";

class Detail extends React.Component {
  componentDidUpdate() {
    const { detailId, detailData } = this.props;
    if (detailId !== null && detailData === null) {
      this.fetchDetail();
    }
  }

  fetchDetail() {
    const { detailId, setDetailData } = this.props;
    nasaClient.getDetail(detailId).then(detail => setDetailData(detail));
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
  }

  ESC_KEY_EVENT = 27;
  onKeyDown(event) {
    const evt = event || window.event;
    if (evt.keyCode === this.ESC_KEY_EVENT) {
      this.props.close();
    }
  }

  render() {
    const { detailData, detailId, close } = this.props;

    if (detailId === null) {
      return <React.Fragment />;
    }

    if (detailData === null) {
      return (
        <DetailContainer>
          <Preloading />
        </DetailContainer>
      );
    }

    const {
      identifier,
      caption,
      centroid_coordinates,
      image,
      date,
      coords,
    } = detailData;

    return (
      <DetailContainer>
        <CloseButton onClick={() => close()}>[ CLOSE ]</CloseButton>
        <DetailInfoContainer className="fade-in">
          <h2>id: {identifier}</h2>
          <p>
            [{centroid_coordinates.lat}, {centroid_coordinates.lon}]
          </p>
          <p>{caption}</p>
        </DetailInfoContainer>
        <div className="fade-in" />

        {Object.keys(coords).map(property => (
          <DetailInfoContainer className="fade-in">
            <h3>{property}</h3>
            [{Object.keys(coords[property]).map(insideProperty => (
              <p>
                {insideProperty}: {coords[property][insideProperty]}
              </p>
            ))}]
          </DetailInfoContainer>
        ))}
      </DetailContainer>
    );
  }
}

const mapStateToProps = store => ({
  detailId: store.images.detailId,
  detailData: store.images.detailData,
});

const mapDispatchToProps = dispatch => ({
  // close: () => dispatch(selectImageId(null)),
  // setDetailData: detailData => dispatch(selectImageData(detailData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
