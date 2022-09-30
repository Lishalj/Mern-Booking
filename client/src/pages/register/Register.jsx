import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

export default function Register({setOpen}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // const validation=()=>
  // {
  //     var a = document.getElementsByName('username').value;
  //     // var b = document.form.email.value;
  //     // var c = document.form.password.value;
  //     // var d = document.form.phone.value;
  //     // var e = document.form.city.value;
  //     // var f = document.form.country.value;
  //     if(a=="")
  //     {
  //       alert("Please Enter Your Username");
  //       document.form.username.focus();
  //       return false;
  //     }
  //     if(!isNaN(a))
  //     {
  //       alert("Please Enter Only Characters");
  //       document.form.username.select();
  //       return false;
  //     }
  //     // if(b=="")
  //     // {
  //     //   alert("Please Enter Your Email");
  //     //   document.form.email.focus();
  //     //   return false;
  //     // }
  //     // if(c=="")
  //     // {
  //     //   alert("Please Enter Your Password");
  //     //   document.form.password.focus();
  //     //   return false;
  //     // }
  //     // if(d=="")
  //     // {
  //     //   alert("Please Enter Your Phone Number");
  //     //   document.form.phone.focus();
  //     //   return false;
  //     // }
  //     // if(e=="")
  //     // {
  //     //   alert("Please Enter Your City");
  //     //   document.form.city.focus();
  //     //   return false;
  //     // }
  //     // if(f=="")
  //     // {
  //     //   alert("Please Enter Your Country");
  //     //   document.form.country.focus();
  //     //   return false;
  //     // }

  // }
  
  

  const navigate = useNavigate()
  const [errors, setErrors] = useState(false);
  
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    setErrors(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
        phone,
        city,
        country,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      alert("sucess! Please Login again")
      navigate("/login")
      setOpen(false);
      
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
      <>
    <Navbar/>
    <Header/>
      <div className="register">
      <div className="container">
      <form className="registerForm" onSubmit={ handleSubmit}>
      <label style={{alignItem:"Center"}}>Registration</label>
      <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() =>{navigate('/'); setOpen(false); }}
        />
        
        <input
          type="text"
          name="usename"
          className="registerInput"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          />
          {/* <br/><br /> */}
          
        <input
          type="text"
          name="email"
          className="registerInput"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          />
          {/* <br/><br /> */}
        <input
          type="password"
          name="password"
          className="registerInput"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          />
          {/* <br/><br /> */}
          <input
          type="number"
          name="phone"
          className="registerInput"
          placeholder="Enter your Phone number"
          onChange={(e) => setPhone(e.target.value)}
          />
          {/* <br/><br /> */}
          <input
          type="text"
          name="city"
          className="registerInput"
          placeholder="Enter your city"
          onChange={(e) => setCity(e.target.value)}
          />
          {/* <br/><br /> */}
          <input
          type="text"
          name="country"
          className="registerInput"
          placeholder="Enter your country"
          onChange={(e) => setCountry(e.target.value)}
          />
        {/* <br/><br /> */}
        <button disabled={loading} className="registerButton" type="submit">
          Register
        </button>
        <br />
        {error && <span style={{color:"red"}}>{error.message}</span>}
      </form>
      
          </div>
    </div>
    <br /><br /><br /><br />
    <Footer/>
          </>
  );
}





















// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../components/navbar/Navbar";
// import { AuthContext } from "../../context/AuthContext";
// import "./register.css";

// const Register = () => {
//   const [credentials, setCredentials] = useState({
//     username,
//     email,
//     passwordy,
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
//         const res = await axios.post("/auth/register", {
//             username,
//             email,
//             password,
//           });
//           res.data && window.location.replace("/login");
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//     }
//   };


//   return (
//     <>
//     <Navbar/>
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

// export default Register;
