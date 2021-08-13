import React from 'react';

function Pagination(props) {
    return (
        <div className="mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="row">
                            <div className="text-wrap">
                                <div className="example">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                        <li className="page-item disabled"><a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagination;