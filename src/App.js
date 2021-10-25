import "bootstrap/dist/css/bootstrap.min.css";
import MainPageJobs from "./Components/MainPageJobs";
import Favorites from "./Components/Favorites";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={MainPageJobs} />
        <Route path="/favorites" exact component={Favorites} />
      </div>
    </BrowserRouter>
  );
}

export default App;
