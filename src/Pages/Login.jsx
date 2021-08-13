import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { login, logout } from '../Reducer/Action';

function Login(props) {

    // const dispatch = useDispatch();
    let history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        // dispatch(login());
        history.push('/dashboard');
    }

    return (
        <div>
            <div className="page main-signin-wrapper">
                {/* Row */}
                <div className="row signpages text-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row row-sm">
                                <div className="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
                                    <div className="mt-5 pt-4 p-2 pos-absolute">
                                        <img src="../../assets/img/brand/logo-light.png" className="header-brand-img mb-4" alt="logo" />
                                        <div className="clearfix" />
                                        <img src="../../assets/img/svgs/user.svg" className="ht-100 mb-0" alt="user" />
                                        <h5 className="mt-4 text-white">Create Your Account</h5>
                                        <span className="tx-white-6 tx-13 mb-5 mt-xl-0">Signup to create, discover and connect with the global community</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form">
                                    <div className="container-fluid">
                                        <div className="row row-sm">
                                            <div className="card-body mt-2 mb-2">
                                                <img src="../../assets/img/brand/logo.png" className="d-lg-none header-brand-img text-left float-left mb-4" alt="logo" />
                                                <div className="clearfix" />
                                                <form onSubmit={(e) => handleLogin(e)}>
                                                    <h5 className="text-left mb-2">Signin to Your Account</h5>
                                                    <p className="mb-4 text-muted tx-13 ml-0 text-left">Signin to create, discover and connect with the global community</p>
                                                    <div className="form-group text-left"><label>Email</label> <input className="form-control" placeholder="Enter your email" type="text" /></div>
                                                    <div className="form-group text-left"><label>Password</label> <input className="form-control" placeholder="Enter your password" type="password" /></div>
                                                    <button className="btn ripple btn-main-primary btn-block">Sign In</button>
                                                </form>
                                                <div className="text-left mt-5 ml-0">
                                                    <div className="mb-1"><Link to="/forgot">Forgot password?</Link></div>
                                                    <div>Don't have an account? <Link to="/register">Register Here</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Row */}
            </div>
        </div>
    );
}

export default Login;