import React from "react";
import { connect } from "react-redux";
import clientNasa from "../../client/nasaClient";
import { setPreload, setList, selectImageId } from "../../ducks/images";
import { Item } from "../item/Item";
import Preloading from "../preloading/Preloading";

class List extends React.Component {
  componentDidMount() {
    const { showSpinner, hideSpinner, setImageList } = this.props;
    showSpinner();
    clientNasa.getList().then(list => {
      hideSpinner();
      setImageList(list);
    });
  }

  render() {
    const { list, preloading, selectImageId } = this.props;
    return (
      <section>
        <marquee>
          <h2>DSCOVR's Earth Polychromatic Imaging Camera (EPIC)</h2>
        </marquee>

        {preloading && <Preloading />}

        {list.map(imageData => (
          <Item
            onSelect={() => selectImageId(imageData.identifier)}
            {...imageData}
          />
        ))}
      </section>
    );
  }
}

const mapStateToProps = store => ({
  list: store.images.list,
  preloading: store.images.preloading,
});

const mapDispatchToProps = dispatch => ({
  showSpinner: () => dispatch(setPreload(true)),
  hideSpinner: () => dispatch(setPreload(false)),
  setImageList: list => dispatch(setList(list)),
  selectImageId: image => dispatch(selectImageId(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
