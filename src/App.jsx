// import { Provider } from 'react-redux';
// import './App.css';
// import './styles/style.css'
// import './styles/responsive.css'
// import './environment/styles/dark.css'
// import { store } from './redux/store';
// import Bar from './components/bar/bar';
// import { ChatButton } from './components/bar/floatButtons';

// function App({ content }) {
//   return (
//     <div className="App">
//       <Provider store={store}>
//         <Bar />
//         <ChatButton />
//         {content}
//       </Provider>
//     </div>
//   );
// }

import React from 'react';
function App() {
  // Acceso directo a la variable de entorno
  const git_token = process.env.REACT_APP_GITHUB_TOKEN;

  return (
    <div className="App">
      <h1>Variable de Entorno</h1>
      <p>Valor la git_token: {git_token}</p>
    </div>
  );
}

export default App;