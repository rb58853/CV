import './App.css';
// import './environment/styles/light.css'
import './environment/styles/dark.css'
import './styles/style.css'


function App({ content }) {
  return (
    <div className="App">
      {/* <ScrollToTop/> */}
      {content}
    </div>
  );
}

export default App;
