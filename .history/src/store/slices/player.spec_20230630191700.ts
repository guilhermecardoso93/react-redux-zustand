import { describe, it } from 'vitest'
import { player  as reducer, playerSlice, play} from './player'

describe('player slice', () => {
  it('should be able to play', () => {
    const state = playerSlice.getInitialState()

    reducer(state, play([1,2]))
  })
})