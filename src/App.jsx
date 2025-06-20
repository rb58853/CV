import { Provider } from 'react-redux';
import './App.css';
import './styles/style.css'
import './styles/responsive.css'
import './environment/styles/dark.css'
import { store } from './redux/store';
import Bar from './components/bar/bar';
import { ChatButton } from './components/bar/floatButtons';
import { useEffect, useState } from 'react';
import { AssistantData } from './utils/test';

function App({ content }) {
  return (
    <div className="App">
      <Provider store={store}>
        <Bar />
        <ChatButton />
        {content}
      </Provider>
    </div>
  );
}
// function App({ content }) {
//   return <AssistantData />
// }

export default App;