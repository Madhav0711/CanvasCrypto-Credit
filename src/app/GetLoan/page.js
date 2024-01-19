import React from 'react'

const page = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white"  style={{background: "rgb(2,0,36)",
        background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 30%, rgba(0,69,255,1) 100%)"}}  >
         <div className="col-md-3 hover-div light bg-white shadow rounded">
        <div className=" p-3 rounded border shadow" >
          <h2 className="text-center m-0">Let's Get You Started!</h2>
          <p className="text-center ">please enter your details</p>
          <form action=""  noValidate className="my-5">
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Account ID
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Account ID"
              />
              
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Address
              </label>
              <input
                type="email"
                name="email"
                // onChange={handleInput}
                className="form-control"
                placeholder="Enter Address"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary me-2 w-100 my-1 rounded-pill"
            >
                Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page