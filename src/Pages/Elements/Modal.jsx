import React from 'react';
import { useState } from 'react';

function Modal(props) {
    return (
        <div className="row mt-3">
            <BasicModal/>
            <SmallModal/>
            <LargeModal/>
            <SuccessAlertModal/>
            <DangerAlertModal/>
            <ScrollingModal/>
            <AnimoationModal/>
        </div>
    );
}

const BasicModal = () => {
    return (
        <>
            <div className="col-sm-4 col-md-4">
                <div className="card custom-card">
                    <div className="card-body">
                        <div><h6 className="main-content-label mb-3">Basic Modal</h6></div>
                        <button className="btn ripple btn-primary" data-target="#modaldemo1" data-toggle="modal" href>View Demo</button>
                    </div>
                </div>
            </div>

            <div className="modal" id="modaldemo1" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">Basic Modal</h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <h6>Modal Body</h6>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn ripple btn-primary" type="button">Save changes</button> 
                            <button className="btn ripple btn-secondary" data-dismiss="modal" type="button">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SmallModal = () => {
    return (
        <>
            <div className="col-sm-4 col-md-4">
                <div className="card custom-card">
                    <div className="card-body">
                        <div><h6 className="main-content-label mb-3">Small Modal</h6></div>
                        <button className="btn ripple btn-danger" data-target="#modaldemo2" data-toggle="modal" href>View Demo</button>
                    </div>
                </div>
            </div>

            <div className="modal" id="modaldemo2" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">Basic Modal</h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <h6>Modal Body</h6>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn ripple btn-primary" type="button">Save changes</button> 
                            <button className="btn ripple btn-secondary" data-dismiss="modal" type="button">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const LargeModal = () => {
    return (
        <>
            <div className="col-sm-4 col-md-4">
                <div className="card custom-card">
                    <div className="card-body">
                        <div><h6 className="main-content-label mb-3">Large Modal</h6></div>
                        <button className="btn ripple btn-info" data-target="#modaldemo3" data-toggle="modal" href>View Demo</button>
                    </div>
                </div>
            </div>

            <div className="modal" id="modaldemo3" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">Basic Modal</h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <h6>Modal Body</h6>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn ripple btn-primary" type="button">Save changes</button> 
                            <button className="btn ripple btn-secondary" data-dismiss="modal" type="button">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SuccessAlertModal = () => {
    
    return (
        <>
            <div className="col-sm-4 col-md-4">
                <div className="card custom-card">
                    <div className="card-body">
                        <div><h6 className="main-content-label mb-3">Success Alert Modal</h6></div>
                        <button className="btn ripple btn-success" data-target="#modalSuccessAlert" data-toggle="modal" href>View Demo</button>
                    </div>
                </div>
            </div>

            <div className="modal show" id="modalSuccessAlert" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content tx-size-sm">
                    <div className="modal-body tx-center pd-y-20 pd-x-20">
                    <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button> <i className="icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block" />
                    <h4 className="tx-success tx-semibold mg-b-20">Congratulations!</h4>
                    <p className="mg-b-20 mg-x-20">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    <button aria-label="Close" className="btn ripple btn-success pd-x-25" data-dismiss="modal" type="button">Continue</button>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

const DangerAlertModal = () => {
    
    return (
        <>
            <div className="col-sm-4 col-md-4">
                <div className="card custom-card">
                    <div className="card-body">
                        <div><h6 className="main-content-label mb-3">Danger Alert Modal</h6></div>
                        <button className="btn ripple btn-danger" data-target="#modalDangerAlert" data-toggle="modal" href>View Demo</button>
                    </div>
                </div>
            </div>

            <div className="modal show" id="modalDangerAlert" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content tx-size-sm">
                        <div className="modal-body tx-center pd-y-20 pd-x-20">
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button> <i className="icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block" />
                            <h4 className="tx-danger mg-b-20">Error: Cannot process your entry!</h4>
                            <p className="mg-b-20 mg-x-20">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            <button aria-label="Close" className="btn ripple btn-danger pd-x-25" data-dismiss="modal" type="button">Continue</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const ScrollingModal = () => {
    
    return (
        <>
            <div className="col-sm-4 col-md-4">
                <div className="card custom-card">
                    <div className="card-body">
                        <div><h6 className="main-content-label mb-3">Scrolling Modal</h6></div>
                        <button className="btn ripple btn-danger" data-target="#scrollingModal" data-toggle="modal" href>View Demo</button>
                    </div>
                </div>
            </div>

            <div className="modal" id="scrollingModal" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">Scrolling With Content Modal</h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
                                truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that
                                are extremely painful.
                            </p>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            </p>
                            <p>
                                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble
                                that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                            </p>
                            <p>
                                These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and
                                every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man
                                therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn ripple btn-primary" type="button">Save changes</button> 
                            <button className="btn ripple btn-secondary" data-dismiss="modal" type="button">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const AnimoationModal = () => {

    const [effect, setEffect] = useState();

    const buttonEffect = [
        'effect-scale',
        'effect-slide-in-right',
        'effect-slide-in-bottom',
        'effect-newspaper',
        'effect-fall',
        'effect-flip-horizontal',
        'effect-flip-vertical',
        'effect-super-scaled',
        'effect-sign',
        'effect-rotate-bottom',
        'effect-rotate-left',
        'effect-just-me'
    ];

    return (
        <>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">

                            {
                                buttonEffect.map((effect) => {
                                    return (
                                        <div className="col-md-2 my-1">
                                            <button onClick={() => setEffect(`${effect}`)} className="modal-effect btn btn-outline-primary btn-block tx-11" data-toggle="modal" href="#modalAnimation">{effect}</button>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

            <ModalWithEffect effect={effect}/>
            
        </>
    )
}

const ModalWithEffect = (props) => { 
    return (
        <div className={"modal "+ props.effect} id="modalAnimation" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content modal-content-demo">
                    <div className="modal-header">
                        <h6 className="modal-title">Modal Header</h6>
                        <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body">
                        <h6>Modal Body</h6>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn ripple btn-primary" type="button">Save changes</button> 
                        <button className="btn ripple btn-secondary" data-dismiss="modal" type="button">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;