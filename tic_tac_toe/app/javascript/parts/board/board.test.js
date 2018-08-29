import { shallowMount, createLocalVue } from '@vue/test-utils'
import Board from './board.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Board', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      update: jest.fn().mockImplementation(cb => cb)
    }
    store = new Vuex.Store({
      state: {},
      modules: {
        games_players: {
          namespaced: true,
          state: {
            all: [],
            current: null,
            error: null
          },
          actions
        }
      }
    })
  })

  test('renders an svg', () => {
    const wrapper = shallowMount(Board, { store, localVue })
    expect(wrapper.contains('svg'))
  })

  test('calls games_players update action', () => {
    const wrapper = shallowMount(Board, { store, localVue })
    wrapper.setProps({
      myPiece: 'X',
      width: 400,
      game: {
        id: 1,
        board: ['','O','X','','','','','',''],
        games_players: [
          {
            id: 1,
            game_id: 1,
            player_id: 1,
            piece: 'X'
          },
          {
            id: 2,
            game_id: 1,
            player_id: 2,
            piece: 'O'
          }
        ]
      }
    })
    wrapper.find('rect').trigger('click')
    expect(actions.update).toHaveBeenCalled()
  })

  test('does not call games_players update action for existing piece', () => {
    const wrapper = shallowMount(Board, { store, localVue })
    wrapper.setProps({
      myPiece: 'X',
      width: 400,
      game: {
        id: 1,
        board: ['X','O','','','','','','',''],
        games_players: [
          {
            id: 1,
            game_id: 1,
            player_id: 1,
            piece: 'X'
          },
          {
            id: 2,
            game_id: 1,
            player_id: 2,
            piece: 'O'
          }
        ]
      }
    })
    wrapper.find('rect').trigger('click')
    expect(actions.update).not.toHaveBeenCalled()
  })

})