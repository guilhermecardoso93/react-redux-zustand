import { describe, expect, it } from 'vitest'
import { player  as reducer, playerSlice, play} from './player'

describe('player slice', () => {
  it('should be able to play', () => {
    const inicialState = playerSlice.getInitialState()

    const state = reducer(inicialState, play([1,2]))

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentModuleIndex).toEqual(2)
  })
})