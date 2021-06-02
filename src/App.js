import './App.css';
import NavBar from './components/NavBar/NavBar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers/taskReducer'
import AddTask from './components/AddTask/AddTask';

function App() {

  const store = createStore(taskReducer);

  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <Provider store={store}>
        <NavBar/>
        <AddTask />
      </Provider>
    </div>
  );
}

export default App;
