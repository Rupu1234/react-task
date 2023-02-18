import Router from "./routes/Index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "./Container/Redux/Store";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    </>
  );
};

export default App;
