import React from 'react'
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();
  const handlelogout = ()=>{
    localStorage.removeItem("authtoken");
    navigate("/login");
  }

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="#">FoodHut</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
              </li>

              {(localStorage.getItem("authtoken")) ?
                <li>
                  <Link className="nav-link active" aria-current="page" to="#">My orders</Link>
                </li> : ""
              }
            </ul>
            {(!localStorage.getItem("authtoken")) ?
              <div className='d-flex'>
                <Link className="btn bg-white text-success mx-1 nav-link" to="/login">Login</Link>


                <Link className="btn bg-white nav-link text-success" to="/createuser">SignUp</Link>
              </div> : 
              <>

              <div className='btn bg-white mx-3'>
                My Cart
              </div>
              <div className='btn bg-white text-success' onClick={handlelogout}>
                Logout
              </div>
              
              
              </>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
