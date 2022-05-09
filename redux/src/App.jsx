import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT } from './actions/counter';
import Auth from './Auth';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {isLogged && (<>
        <h1>Counter : {counter}</h1>
        <button onClick={() => dispatch(INCREMENT)}>Increment</button>
        <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
        <hr />
      </>)}
      <Auth />
    </div>
  );
}

export default App;
