import React from 'react'
import NavBar from './Navbar'
import Navbar from './Navbar'

const DeleteTodo = () => {
  return (
    <div>
      <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />


                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="btn btn-danger">Delete</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteTodo