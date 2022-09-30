import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = ({setOpen}) => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
      setOpen(false);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <>
    <Navbar/>
    <Header/>
    {/* <span className="loginTitle">Login</span> */}
    <div className="login">
      <div className="lContainer">
        <label style={{alignItem:"Center"}}>Login</label>
      <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() =>{navigate('/'); setOpen(false); }}
        />
        <br /><br />
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
          /><br/><br />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
          /><br/><br/>
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button><br />
        {error && <span>{error.message}</span>}
      </div>
    </div><br /><br /><br /><br />
    <Footer/>
  </>
  );
};

export default Login;


// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom"
// import Navbar from "../../components/navbar/Navbar";
// import { AuthContext } from "../../context/AuthContext";
// import "./login.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: undefined,
//     password: undefined,
//   });

//   const { loading, error, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/login", credentials);
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
//       navigate("/")
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//     }
//   };


//   return (
//     <>
//     <Navbar/>
//     <span className="loginTitle">Login</span>
//     <div className="login">
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="username"
//           id="username"
//           onChange={handleChange}
//           className="lInput"
//           />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//           />
//         <button disabled={loading} onClick={handleClick} className="lButton">
//           Login
//         </button>
//         {error && <span>{error.message}</span>}
//       </div>
//     </div>
//   </>
//   );
// };

// export default Login;
