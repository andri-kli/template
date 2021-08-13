import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

function Overlay({active, spinner, size}) {

    const display = active ? ' d-flex' : ' d-none';
    const loader = <div className="text-center"><div className="lds-dual-ring" style={{width: size}}/></div>;

    if (spinner === 'Bounce') {
        // loader = <BounceLoader size={size} color="#1877D1" />;
    }
    else if (spinner === 'Ring') {        
        // loader = <div className="text-center"><div className="lds-dual-ring" style={{width: size}} /></div>;
    }

    return (
        <div>
            {display ?
            <div className={"overlay d-flex"}>
              <div className="w-100 d-flex justify-content-center align-items-center">
                {loader}
              </div>
            </div>
            : '' }
        </div>
    );
}

export default Overlay;