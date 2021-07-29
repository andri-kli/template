import { Route, Switch, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Dashboard from "./Pages/Dashboard";
import Form from "./Pages/Form/Form";

function App() {
  
  const pathname = useLocation().pathname.split('/');
  
  return (

    <div className="page">
      <div className="main-content side-content pt-0">
          <Sidebar path={{pathname: pathname[1], subPathName: pathname[2]}}></Sidebar>
          <Topbar></Topbar>

          <div className="container-fluid">
            <div className="inner-body">
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/form/:type" component={Form}/>
              </Switch>
            </div>
          </div>
      </div>
    </div>
          
  );
}

export default App;
