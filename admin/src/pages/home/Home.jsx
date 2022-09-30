import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user} = useContext(AuthContext);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">

        <Navbar />
        <h1>{ `Welcome ${user.username} !`}</h1>
      </div>
    </div>
  );
};

export default Home;
