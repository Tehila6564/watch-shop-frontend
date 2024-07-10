import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/Store";
import { Navigator } from "./project/navigate";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="App-header">
        <center>
          <Provider store={store}>
          
            <BrowserRouter>
              <Navigator />
            </BrowserRouter>
          </Provider>
        </center>
      </header>
    </div>
  );
}

export default App;
