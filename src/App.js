//import logo from './logo.svg';
//import './App.css';

import Header from "./component/header";
import Slider from "./component/slider";
import Defaultsection from "./component/defaultsection";
import Defaultsection2 from "./component/defaultsection2";
import News1 from "./component/news1";
import Download from "./component/download";
import Footer from ".//component/footer";
//import { BrowserRouter } from "react-router-dom";

//import Home from "./component/ss";

// div를 묶어서 return해주기때문에
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />

      <Slider />

      <Defaultsection />

      <Defaultsection2 />

      <News1 />

      <Download />

      <Footer />
    </Fragment>
  );
}
export default App;
