import React from "react"
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (

  <>
  
  <Header/>
  <div className="container">
   <Content/>

  </div>
  <Footer/>
  </>
);

export default Home;
