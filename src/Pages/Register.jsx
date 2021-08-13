import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    return (
        <div>
            <div className="page main-signin-wrapper">
                {/* Row */}
                <div className="row signpages text-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row row-sm">
                                <div className="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
                                <div className="mt-5 pt-5 p-2 pos-absolute">
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
                                        <h5 className="text-left mb-2">Signup for Free</h5>
                                        <p className="mb-4 text-muted tx-13 ml-0 text-left">It's free to signup and only takes a minute.</p>
                                        <form>
                                        <div className="form-group text-left"><label>Name</label> <input className="form-control" placeholder="Enter your Name" type="text" /></div>
                                        <div className="form-group text-left"><label>Email</label> <input className="form-control" placeholder="Enter your email" type="text" /></div>
                                        <div className="form-group text-left"><label>Password</label> <input className="form-control" placeholder="Enter your password" type="password" /></div>
                                        <button className="btn ripple btn-main-primary btn-block">Create Account</button>
                                        </form>
                                        <div className="text-left mt-5 ml-0">
                                        <p className="mb-0">Already have an account? <Link to="/login">Sign In</Link></p>
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

export default Register;