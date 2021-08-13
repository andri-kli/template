import React from 'react';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

function Toast(props) {
    const notify = () => toast.success("to create");;

    return (
      <div className="mt-3">
          <div className="row">
              <div className="col-md-12">
                  <div className="card">
                      <div className="card-body">
                        <div className="row">
                            <div className="col-2">
                                <button className="btn btn-success" onClick={notify}>Notify !</button>
                                <ToastContainer 
                                    position="top-center"                                     
                                    autoClose={5000}
                                    newestOnTop={false}
                                    closeOnClick
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover/>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Toast;