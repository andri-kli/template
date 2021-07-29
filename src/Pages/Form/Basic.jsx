import React, { useState } from 'react';

function Basic(props) {

    return (
    <div>
      <div className="row row-sm mt-5">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div>
                  <h6 className="main-content-label mb-1">Form Input &amp; Textarea</h6>
                  <p className="text-muted card-sub-title">A basic form control input and textarea with disabled and readonly mode.</p>
                </div>
                <div className="row row-sm">
                  <div className="col-lg"> <input className="form-control" placeholder="Input box" type="text" /> </div>
                  <div className="col-lg mg-t-10 mg-lg-t-0"> <input className="form-control" placeholder="Input box (readonly)" readOnly type="text" /> </div>
                  <div className="col-lg mg-t-10 mg-lg-t-0"> <input className="form-control" disabled placeholder="Input box (disabled)" type="text" /> </div>
                </div>
                <div className="row row-sm mg-t-20">
                  <div className="col-lg"> <textarea className="form-control" placeholder="Textarea" rows={3} defaultValue={""} /> </div>
                  <div className="col-lg mg-t-10 mg-lg-t-0"> <textarea className="form-control" placeholder="Textarea (readonly)" readOnly rows={3} defaultValue={""} /> </div>
                  <div className="col-lg mg-t-10 mg-lg-t-0"> <textarea className="form-control" disabled placeholder="Texarea (disabled)" rows={3} defaultValue={""} /> </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div>
                  <h6 className="main-content-label mb-1">Valid State Input</h6>
                  <p className="text-muted card-sub-title">A form control with success, warning and error state.</p>
                </div>
                <form className="needs-validation was-validated">
                  <div className="row row-sm">
                    <div className="col-lg-6">
                      <div className="form-group has-success mg-b-0"> <input className="form-control" placeholder="Input box (success state)" required type="text" defaultValue="This is input" /> <textarea className="form-control mg-t-20" placeholder="Textarea (success state)" required rows={3} defaultValue={"This is textarea"} /> </div>
                    </div>
                    <div className="col-lg-6 mg-t-20 mg-lg-t-0">
                      <div className="form-group has-danger mg-b-0"> <input className="form-control" placeholder="Input box (invalid state)" required type="text" /> <textarea className="form-control mg-t-20" placeholder="Textarea (invalid state)" required rows={3} defaultValue={""} /> </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div>
                  <h6 className="main-content-label mb-1">Default Form Input Fields with labels</h6>
                  <p className="text-muted card-sub-title">A form control with labels state.</p>
                </div>
                <div className="row row-sm">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p className="mg-b-10">Name</p>
                      <input type="text" className="form-control" name="example-text-input" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <p className="mg-b-10">Disabled</p>
                      <input type="text" className="form-control" name="example-disabled-input" placeholder="Disabled text area.." defaultValue disabled />
                    </div>
                    <div className="form-group">
                      <p className="mg-b-10">Readonly</p>
                      <input type="text" className="form-control" name="example-disabled-input" placeholder="Read Only Text area." readOnly />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p className="mg-b-10">Valid Email</p>
                      <input type="text" className="form-control is-valid state-valid" name="example-text-input-valid" placeholder="Valid Email.." />
                    </div>
                    <div className="form-group m-0">
                      <p className="mg-b-10">Invalid Number</p>
                      <input type="text" className="form-control is-invalid state-invalid" name="example-text-input-invalid" placeholder="Invalid Number.." />
                      <div className="invalid-feedback">Invalid feedback</div>
                    </div>
                    <div className="form-group">
                      <p className="mg-b-10">Password</p>
                      <input type="password" className="form-control" name="example-password-input" placeholder="Password.." />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <p className="mg-b-10">Message</p>
                      <textarea className="form-control" name="example-textarea-input" rows={4} placeholder="text here.." defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-sm">
                <div className="col-lg-12 col-md-12">
                    <div className="card custom-card">
                        <div className="card-body">
                            <div>
                            <h6 className="main-content-label mb-1">Input Sizes</h6>
                            <p className="text-muted card-sub-title">A form control sizes in large,small Fields.</p>
                            </div>
                            <div className="form-group"><input type="text" className="form-control input-lg" name="example-text-input" placeholder="Large Input" /></div>
                            <div className="form-group"><input type="text" className="form-control" name="example-text-input" placeholder="Default Input" /></div>
                            <div className="form-group mb-0"><input type="text" className="form-control input-sm" name="example-text-input" placeholder="Small Input" /></div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    );
}

export default Basic;