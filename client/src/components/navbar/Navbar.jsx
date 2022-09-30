import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user ,dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Tripbooking</span>
        </Link>
        {user ? `Welcome ${user.username} !` : (
          <div className="navItems">
            
            <Link to='/login'><button  className="navButton">Login</button> </Link>
            <Link to="/register">
              <button  className="navButton">Register</button>
            </Link>

            
      
           </div>
          
       )}
      {user && <button className="navButton" onClick={handleLogout}>LOGOUT</button>}
        
      </div>
    </div>
  );
};

export default Navbar;
