import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Dashboard from '../Pages/Dashboard';
import Element from '../Pages/Elements/Element';
import Form from '../Pages/Form/Form';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';


const Routes = (props) => {    

    const pathname = useLocation().pathname.split('/');

    return (
    <div>            
        <Switch>                   
            <Route exact path="/" render={ () => <Redirect to={{ pathname: "/login" }}/> } />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
                          
            <div className="page">
                {
                    pathname[1] !== 'login' ?
                        <div>
                            <Topbar></Topbar>
                            <Sidebar path={{pathname: pathname[1], subPathName: pathname[2]}}></Sidebar>
                        </div>
                    :
                        null
                }

                <div className="main-content side-content pt-0">
                    <div className="container-fluid">
                        <div className="inner-body">
                            <PrivateRoute path="/dashboard" component={Dashboard} />
                            <PrivateRoute path="/form/:type" component={Form} />
                            <PrivateRoute path="/elements/:type" component={Element} />
                        </div>
                    </div>
                </div>
            </div>
        </Switch>
    </div>
        
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    // console.log(rest);
    const AuthState = useSelector(state => state.AuthReducer);

    return(
        <Route
            {...rest}
            render={props => AuthState.isAuthenticated 
                ? ( <Component {...props} /> ) 
                : ( <Redirect to={{ pathname: "/login" }} />)
            }
        />
    )
}

// const PublicRoute = ({ component: Component, ...rest }) => {
//     const AuthState = useSelector(state => state.AuthReducer);

//     return(
//         <Route
//             {...rest}
//             render={props => !AuthState.isAuthenticated 
//                 ? ( <Component {...props} /> ) 
//                 : ( <Redirect to={{ pathname: "/dashboard" }} />)
//             }
//         />
//     )
// }

    


export default Routes;