import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { kea } from 'kea'

const keaOptions = {
    path: () => ['scenes'],

    actions: () => ({
        increment: (amount) => ({ amount }),
        decrement: (amount) => ({ amount })
    }),

    reducers: ({ actions }) => ({
        counter: [0, PropTypes.number, {
            [actions.increment]: (state, payload) => {
                console.log('increment!', state);
                return state + payload.amount
            },
            [actions.decrement]: (state, payload) => {
                console.log('decrement!', state)
                return state - payload.amount
            }
        }]
    }),

    selectors: ({ selectors }) => ({
        doubleCounter: [
            () => [selectors.counter],
            (counter) => counter * 2,
            PropTypes.number
        ]
    })
}

class Counter extends Component {
    render() {
        const { increment, decrement } = this.actions
        const { counter, doubleCounter } = this.props

        return (
          <div className='kea-counter'>
            <p>Count: {counter}</p>
            <p>Doublecount: {doubleCounter}</p>
            <button onClick={() => increment(1)}>Increment</button>
            <button onClick={() => decrement(1)}>Decrement</button>
          </div>
        )
    }
}

export default kea(keaOptions)(Counter)