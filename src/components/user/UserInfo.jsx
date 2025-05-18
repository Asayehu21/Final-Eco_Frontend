// import React from 'react'

import styles from "./UserInfo.module.css"
import pic from "../../assets/profile_pic.jpg"
import { useContext } from 'react'
import {  NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const UserInfo = ({ userInfo }) => {
  const { setIsAuthenticated } = useContext(AuthContext)

  function logout(){
        localStorage.removeItem("access")
        setIsAuthenticated(false)
    }

  return (
    <div className="row mb-4">
      <div className={`col-md-3 py-3 card ${styles.textCenter}`}>
        <img
           src={pic}
           alt="User Profile"
           className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`}
           />
           <h4>{`${userInfo.first_name} ${userInfo.last_name}`}</h4>
           <p className="text-muted">{userInfo.email}</p>
           {/* <button className="btn mt-2 white" style={{ backgroundColor: "#79AEC8", color: "white"}}> <a href="edit-profile" className="white"> Edit Profile</a> </button> */}
           <button className="btn mt-2 white" style={{ backgroundColor: "#79AEC8", color: "white", padding:20 }}>  </button>
           </div>

           <div className="col-md-9">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: "#79AEC8", color:"white"}}>
                <h5>Account Overview</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                  <p>
                      <strong>Full Name: </strong>{`${userInfo.first_name} ${userInfo.last_name}`}
                    </p>
                    <p>
                      <strong>Username </strong>{userInfo.username}
                    </p>
                    
                    <p>
                      <strong>Email: </strong>{userInfo.email}
                    </p>
                    
                    
                  </div>
                  <div className="col-md-6">
                  <p>
                      <strong>Phone </strong>{userInfo.phone}
                    </p>
                  <p>
                      <strong>City </strong>{userInfo.city}
                  </p>
                  <p>
                      <strong>Region </strong>{userInfo.state}
                  </p>

                  {/* <p>
                      <strong>Role </strong>{userInfo.role}
                  </p> */}
                  

    <p className="nav-item" 
     onClick={logout}
        >
    <NavLink
      to="/logout"
      className={({isActive}) => 
       isActive 
      ? "nav-link active fw-semibold" 
      : "nav-link fs-25 fw-normal"
     }
     end
     ><button className='bg-primary px-4 py-2 text-white'>Logout</button>
     
     </NavLink>
</p>
                  
                  </div>
                </div>
              </div>
            </div>
           </div>
      
    </div>
  )
}

export default UserInfo
