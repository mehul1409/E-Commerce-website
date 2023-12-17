import React from "react";
import Navbar from "./components/navbar/navbar.js";
import Homepage from "./components/homepage/homepage.js";
import Footer from "./components/footer/footer.js";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
