import { handleRequest } from "../detail";
import { runSaga } from "redux-saga";
import * as api from "../../client/pokemonClient";
import { setItemDetail } from "../../ducks/images";

test("Saga detail", async () => {
  const dispatchedActions = [];

  const fakeStore = {
    getState: () => ({}),
    dispatch: action => dispatchedActions.push(action)
  };

  const fakePokemonIndex = 1;
  const fakePokemonURL = `https://pokeapi.co/api/v2/detail/${fakePokemonIndex}`;
  const fakePokemonDetail = {
    abilities: [
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/"
        },
        is_hidden: true
      }
    ],
    base_experience: 64,
    forms: [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon-form/1/" }
    ],
    game_indices: [
      {
        game_index: 1,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
    moves: [
      {
        move: { name: "razor-wind", url: "https://pokeapi.co/api/v2/move/13/" }
      }
    ],
    name: "bulbasaur",
    order: 1,
    species: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      }
    ],
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ],
    weight: 69
  };

  api.getDetail = jest.fn(() => Promise.resolve(fakePokemonDetail));

  await runSaga(fakeStore, handleRequest, fakePokemonIndex, fakePokemonURL)
    .done;

  expect(api.getDetail.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(
    setItemDetail(fakePokemonIndex, fakePokemonDetail)
  );
});
