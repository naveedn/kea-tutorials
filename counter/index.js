import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { keaReducer } from 'kea'

const reducers = combineReducers({
    kea: keaReducer(),
})
const store = createStore(reducers)

import Counter from './counter'

const App = () => (
    <div>
        <Counter />
    </div>
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'))