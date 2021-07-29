import React, { useCallback, useState } from 'react';
import Select from 'react-select'; //https://react-select.com/home
import makeAnimated from 'react-select/animated';
import DateRangePicker from 'react-bootstrap-daterangepicker'; //https://www.npmjs.com/package/bootstrap-daterangepicker-react
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import {useDropzone} from 'react-dropzone';

function Advanced(props) {  

    return (
        <div className="mt-3">      
            <Select2/>

            <DatePicker/>

            <DropZoneComponent />
        </div>
    );
}

const Select2 = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const animatedComponents = makeAnimated();

    var options = [      
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
        <div className="row row-sm">
            <div className="col-lg-12 col-md-12">
                <div className="card custom-card">
                    <div className="card-header">                            
                        <h6 className="main-content-label mb-1">Select2</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            <div className="col-md-4">
                                <label className="font-12">Single Select</label>
                                <Select 
                                    defaultValue={selectedOption} 
                                    options={options} 
                                    onChange={setSelectedOption}
                                    isClearable='true'components={animatedComponents}
                                />
                            </div>
                            
                            <div className="col-md-4">
                                <label className="font-12">Multiple Select</label>
                                <Select 
                                    defaultValue={selectedOption} 
                                    options={options} 
                                    onChange={setSelectedOption}
                                    components={animatedComponents}
                                    isClearable='true'
                                    isMulti
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="font-12">Disabled</label>
                                <Select 
                                    defaultValue={selectedOption} 
                                    options={options} 
                                    isDisabled
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DatePicker = () => {    

    const handleDateRange = (event, picker) => {
        alert(picker.startDate.format('D/M/Y')+' - '+picker.endDate.format('D/M/Y'));
    }
    const handleApply = (event, picker) => {
        alert(picker.startDate.format('D/M/Y'));
    }

    return (
        <div className="row row-sm">
            <div className="col-lg-12">
                <div className="card custom-card">
                    <div className="card-header">                            
                        <h6 className="main-content-label mb-1">Datetime Picker</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            <div className="col-md-4">
                                <label className="font-12">Single Date Picker</label>
                                <DateRangePicker
                                    initialSettings={{ 
                                        startDate: moment().format('D/M/Y'),
                                        singleDatePicker: true,
                                        locale: {
                                            format: 'D/M/Y'
                                        },
                                        autoApply: true                                            
                                    }}                                        
                                    onApply={(event, picker) => {handleApply(event, picker)}}
                                >
                                        <input type="text" className="form-control text-dark" />
                                </DateRangePicker>
                            </div>

                            <div className="col-md-4">
                                <label className="font-12">Date Range Picker</label>
                                <DateRangePicker
                                    initialSettings={{ 
                                        startDate: moment().add(-30, 'days').format('D/M/Y'), 
                                        endDate: moment().format('D/M/Y'),
                                        locale: {
                                            format: 'D/M/Y'
                                        }
                                    }}                                        
                                    onApply={(event, picker) => {handleDateRange(event, picker)}}
                                >
                                        <input type="text" className="form-control text-dark" />
                                </DateRangePicker>
                            </div>
                            
                            <div className="col-md-4">
                                <label className="font-12">Disabled Date Picker</label>
                                <DateRangePicker
                                    initialSettings={{ 
                                        startDate: moment().format('D/M/Y'),
                                        singleDatePicker: true,
                                        locale: {
                                            format: 'D/M/Y'
                                        },                                      
                                    }}                                        
                                    onApply={(event, picker) => {handleApply(event, picker)}}
                                >
                                        <input type="text" className="form-control text-dark" disabled />
                                </DateRangePicker>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DropZoneComponent = () => {

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card custom-card">
                    <div className="card-header">                            
                        <h6 className="main-content-label mb-1">Dropzone</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 dropify-wrapper">
                                
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {
                                    isDragActive ?
                                        <p>Drop the files here ...</p> :
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Advanced;