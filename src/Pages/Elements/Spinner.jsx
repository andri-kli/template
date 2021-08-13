import React from 'react';

function Spinner(props) {
    return (
        <div className="mt-3">
            <div className="row row-sm">
                <div className="col-lg-4 col-sm-4">
                    <div className="card custom-card" id="loaders">
                        <div className="card-body">
                            <div>
                                <h6 className="main-content-label mb-1">Circle Loader</h6>
                                <p className="text-muted card-sub-title">css loading animations</p>
                            </div>
                            <div className="text-center">
                                <div className="lds-circle"><div /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-4">
                    <div className="card custom-card" id="loaders1">
                        <div className="card-body">
                            <div>
                                <h6 className="main-content-label mb-1">Ring Loader</h6>
                                <p className="text-muted card-sub-title">css loading animations</p>
                            </div>
                            <div className="text-center"><div className="lds-dual-ring" /></div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-4">
                    <div className="card custom-card" id="loaders2">
                        <div className="card-body">
                        <div>
                            <h6 className="main-content-label mb-1">Lines Loader</h6>
                            <p className="text-muted card-sub-title">css loading animations</p>
                        </div>
                        <div className="text-center">
                            <div className="lds-facebook">
                            <div />
                            <div />
                            <div />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="card custom-card" id="loaders3">
                        <div className="card-body">
                            <div>
                                <h6 className="main-content-label mb-1">Heart Loader</h6>
                                <p className="text-muted card-sub-title">css loading animations</p>
                            </div>
                            <div className="text-center">
                                <div className="lds-heart"><div /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-4">
                    <div className="card custom-card" id="loaders4">
                        <div className="card-body">
                        <div>
                            <h6 className="main-content-label mb-1">Ripple Loader</h6>
                            <p className="text-muted card-sub-title">css loading animations</p>
                        </div>
                        <div className="text-center">
                            <div className="lds-ripple">
                            <div />
                            <div />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="card custom-card" id="loaders5">
                        <div className="card-body">
                        <div>
                            <h6 className="main-content-label mb-1">Spinner Loader</h6>
                            <p className="text-muted card-sub-title">css loading animations</p>
                        </div>
                        <div className="text-center">
                            <div className="lds-spinner">
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;