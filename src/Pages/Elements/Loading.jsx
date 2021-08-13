import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

function Loading(props) {

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    return (
      <div className="row mt-3">

        <div className="col-md-4 mt-3">
          <div className="card">
            
            <div className="overlay d-flex">
              <div className="w-100 d-flex justify-content-center align-items-center">
                {/* <div className="spinner" /> */}
                <BounceLoader size="35" color="#1877D1" />
              </div>
            </div>

            <h5 className="card-header">Bounce Loader</h5>
            <div className="card-body justify-content-center align-items-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam repellendus similique veniam, quidem aut expedita odit, quaerat iusto eius sequi temporibus exercitationem, harum voluptas a deleniti asperiores sit accusantium!</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-3">
          <div className="card">
            
            <div className="overlay d-flex">
              <div className="w-100 d-flex justify-content-center align-items-center">
                <div className="spinner" />
              </div>
            </div>

            <h5 className="card-header">Spinner Loader</h5>
            <div className="card-body justify-content-center align-items-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam repellendus similique veniam, quidem aut expedita odit, quaerat iusto eius sequi temporibus exercitationem, harum voluptas a deleniti asperiores sit accusantium!</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-3">
          <div className="card">
            
            <div className="overlay d-flex">
              <div className="w-100 d-flex justify-content-center align-items-center">
                
                <div className="lds-ripple">
                  <div />
                  <div />
                </div>
              </div>

            </div>

            <h5 className="card-header">Ripple Spinner</h5>
            <div className="card-body justify-content-center align-items-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam repellendus similique veniam, quidem aut expedita odit, quaerat iusto eius sequi temporibus exercitationem, harum voluptas a deleniti asperiores sit accusantium!</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-3">
          <div className="card">
            
            <div className="overlay d-flex">
              <div className="w-100 d-flex justify-content-center align-items-center">                
                <div className="text-center"><div className="lds-dual-ring" /></div>
              </div>              
            </div>

            <h5 className="card-header">Ripple Spinner</h5>
            <div className="card-body justify-content-center align-items-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam repellendus similique veniam, quidem aut expedita odit, quaerat iusto eius sequi temporibus exercitationem, harum voluptas a deleniti asperiores sit accusantium!</p>
            </div>
          </div>
        </div>


      </div>
    )
}


export default Loading;