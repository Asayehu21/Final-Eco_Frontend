import { useContext } from 'react'
import {  NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const NavBarLink = () => {

    const { isAuthenticated, setIsAuthenticated ,username } = useContext(AuthContext)

    function logout(){
        localStorage.removeItem("access")
        setIsAuthenticated(false)
    }

    return (
//     <div>
//         <ul className="navbar-nav justify-content-end ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//                 <a className='nav-link active fw-semibold' href='#!'>Home</a>
//             </li>
//             <li className='nav-item'>
//                 <Link to="/profile" className="nav-link fw-semibold" href="#!">Shop</Link>
//             </li>
//             <li className="nav-item">
//                 <a className='nav-link fw-semibold' href='#!'>About</a>
//             </li>
//             <li className="nav-item">
//                 <a className='nav-link fw-semibold' href='#!'>Contact</a>
//             </li>

//         </ul>
      
//     </div>

     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {isAuthenticated ? (

<>
<li className="nav-item">
    <NavLink
      to="/"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold " : "nav-link fs-25 fw-normal"
     }
     end
     >
    Home
     </NavLink>
</li>
<li className="nav-item">
    <NavLink
      to="/about"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
    About
     </NavLink>
</li>
<li className="nav-item">
    <NavLink
      to="/category"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
    Category
     </NavLink>
</li>
<li className="nav-item">
    <NavLink
      to="/profile"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
      Profile
    {/* {`Hi ${username}`} */}
     </NavLink>
</li>
<li className="nav-item">
    <NavLink
      to="/contact"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
    Contact
     </NavLink>
</li>

<li className="nav-item" 
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
     ><button className='bg-success text-white'>Logout</button>
     
     </NavLink>
</li>
</> ) :

(
<>
<li className="nav-item">
    <NavLink
      to="/"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
    Home
     </NavLink>
</li>

<li className="nav-item">
    <NavLink
      to="/aboutt"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
    Aboutt
     </NavLink>
</li>

<li className="nav-item">
    <NavLink
      to="/about"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
    About
     </NavLink>
</li>
<li className="nav-item">
    <NavLink
      to="/category"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
    Category
     </NavLink>
</li>
{/* <li className='nav-item'>
            <NavLink
              to="/login"
              className={({isActive }) =>
                isActive ? "nav-link active fw-semibold" : "nav-link fs-20 fw-normal"
            }
            end
            >
                Login
            </NavLink>
        </li> */}
        <li className="nav-item">
            <NavLink
              to="/signup"
              className={({isActive}) => 
               isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
             }
             end
             >
                Account

             </NavLink>
        </li>
        <li className="nav-item">
    <NavLink
      to="/contact"
      className={({isActive}) => 
       isActive ? "nav-link active fw-semibold" : "nav-link fs-25 fw-normal"
     }
     end
     >
    Contact
     </NavLink>
</li>

</>

            )   
    
    }
        

  
        
     </ul>
   )
}

export default NavBarLink
