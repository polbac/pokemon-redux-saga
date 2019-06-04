import React from "react";
import { connect } from "react-redux";
import Preloading from "../preloading/Preloading";
import { selectItem } from "../../ducks/images";
import {
  DetailContainer,
  DetailInfoContainer,
  CloseButton,
  DetailMoves,
} from "./DetailStyles";

class Detail extends React.Component {
  componentDidUpdate() {
    console.log('update')
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
    const { detailId, list, close } = this.props;

    if (detailId === null) {
      return <React.Fragment />;
    }


    if (detailId === null) {
      return (
        <DetailContainer>
          <Preloading />
        </DetailContainer>
      );
    }

    const {
      name,
      base_experience,
      sprites,
      weight,
      moves,
      height
    } = list[detailId];


    return (
      <DetailContainer>
        <CloseButton onClick={() => close()}>[ CLOSE ]</CloseButton>
        <DetailInfoContainer className="fade-in">
          <h2>{name}</h2>
          {Object.keys(sprites).map(key => <img src={sprites[key]} />)}
          <p>
            [experience: {base_experience}]
          </p>

          <p>
            [height: {height} / weight: {weight}]
          </p>

          <p>
            moves <br />
            <DetailMoves>
            {moves.map(move => <code>{move.move.name}<br /></code>)}
            </DetailMoves>
          </p>

          
          
        </DetailInfoContainer>

        


        
      </DetailContainer>
    );
  }
}

const mapStateToProps = store => ({
  detailId: store.images.detailId,
  list: store.images.list,
});

const mapDispatchToProps = dispatch => ({
  close: id => dispatch(selectItem(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
