import React from "react";
import { connect } from "react-redux";
import { API_LIST_URL } from "../../config";
import { setItemDetail, selectItem, setList, setPreload } from "../../ducks/images";
import { Item } from "../item/Item";
import Preloading from "../preloading/Preloading";

class List extends React.Component {
  componentDidMount() {
    const { showSpinner, hideSpinner, setPokemonList } = this.props;
    showSpinner();
    fetch(API_LIST_URL)
      .then(res => res.json())
      .then(list => {
        hideSpinner();
        setPokemonList(list.results);
        this.loadDetails();
      });
  }

  loadDetails() {
    const { list, setPokemonDetail } = this.props;
    list.map((item, index) =>
      fetch(item.url)
        .then(res => res.json())
        .then(item => {
          setPokemonDetail(index, item);
        })
    );
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
  showSpinner: () => dispatch(setPreload(true)),
  hideSpinner: () => dispatch(setPreload(false)),
  setPokemonList: list => dispatch(setList(list)),
  setPokemonDetail: (id, data) => dispatch(setItemDetail(id, data)),
  selectPokemonIndex: id => dispatch(selectItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
