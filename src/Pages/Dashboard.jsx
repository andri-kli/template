import React from 'react';
import Chart from '../Components/Chart';

function Dashboard(props) {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <label className="main-content-label tx-13 font-weight-bold mb-1">Chart Example</label>
                        </div>
                        <div className="card-body">
                            <Chart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;