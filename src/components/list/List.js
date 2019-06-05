import React from "react";
import { connect } from "react-redux";
import { fetchList, selectItem } from "../../ducks/images";
import { Item } from "../item/Item";
import Preloading from "../preloading/Preloading";

class List extends React.Component {
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    const { list, preloading, selectPokemonIndex } = this.props;

    return (
      <section>
        <marquee>
          <h2>YO SOY TU POKEMÓN PORQUE ATRAPASTE MI CORAZÓN</h2>
        </marquee>

        {preloading && <Preloading />}

        {list.map((item, index) => 
          <Item onSelect={() => selectPokemonIndex(index)} {...item} />)}
      </section>
    );
  }
}

const mapStateToProps = store => ({
  list: store.images.list,
  preloading: store.images.preloading,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchList()),
  selectPokemonIndex: (index) => dispatch(selectItem(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
