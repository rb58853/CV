import { Provider } from 'react-redux';
import './App.css';
import './styles/style.css'
import './environment/styles/dark.css'
import { store } from './redux/store';
import Bar from './components/bar/bar';

function App({ content }) {

  return (
    <div className="App">
      <Provider store={store}>
        <Bar />
        {content}
      </Provider>
    </div>
  );
}
export default App;