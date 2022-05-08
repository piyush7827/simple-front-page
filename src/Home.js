import React from "react";
import "./Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <h4>Welcome To Home</h4>
      <h1>Welcome to My Blog</h1>
      <div className="image">
        <img
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/shutterstock_1049564585-960.jpg"
          alt="blog pic"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
