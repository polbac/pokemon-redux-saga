import { listPokemonSaga } from '../list'
import { runSaga } from 'redux-saga';
import * as api from '../../client/pokemonClient'
import { setList, setPreload } from '../../ducks/images';

test('Saga list', async () => {

    const dispatchedActions = [];

    const fakeStore = {
        getState: () => ({  }),
        dispatch: action => dispatchedActions.push(action),
    };

    const fakePokemonList = {
        results: [
            {
                name: 'bulbasaur',
                url: 'https://pokeapi.co/api/v2/pokemon/1/'
            }
        ]
    };

    api.getList = jest.fn(() => Promise.resolve(fakePokemonList));

    await runSaga(fakeStore, listPokemonSaga).done;

    expect(api.getList.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setList(fakePokemonList.results));
    expect(dispatchedActions).toContainEqual(setPreload(false));
})