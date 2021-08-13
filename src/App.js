import { useLocation } from "react-router-dom";


import Routes from "./Route/Routes";
import { Provider } from "react-redux";
import AuthStore from './Reducer';

function App() {
  
  return (
    <Provider store={AuthStore}>
      <Routes />
    </Provider>
  )
  
}

export default App;
