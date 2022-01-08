import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App(){
    return (
      <div>
        {/*Uses a BrowserRouter object to handle the renderization of the view */}
        <BrowserRouter>
          <HeaderComponent />
          <div className="container">
            {/* The Switch object allows you to render dynamically the main page*/}
            <Switch>
              {/* Each Route object contains a path and a component to load when the path is introduced */}
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </BrowserRouter>
      </div>
    );
}

export default App;
