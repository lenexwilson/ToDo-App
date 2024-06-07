import React from 'react'
import NavBar from './Navbar'
import Navbar from './Navbar'

const AddTodo = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label"><b>Name</b></label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label"><b><u>Task1</u></b></label>
                        <select name="" id="" className="form-control">
                            <option value="task">task</option>
                            <option value="Wash car">Wash car </option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label"><b><u>Task2</u></b></label>
                    <select name="" id="" className="form-control">
                        <option value="task">task</option>
                        <option value="Clean home">Clean home</option>
                    </select>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label"><b><u>Task3</u></b></label>
                    <select name="" id="" className="form-control">
                        <option value="task">task</option>
                        <option value="Go to market">Go to market</option>
                    </select>


                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label"><b><u>Task4</u></b></label>
                    <select name="" id="" className="form-control">
                        <option value="task">task</option>
                        <option value="Make garden">Make garden</option>
                    </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="btn btn-success">Apply</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodo